const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');
const currencies = require('../lib/currencies.json');
// API Source with access key
const API = 'https://data.fixer.io/api/latest?access_key=602f9c1bb2f839c76acceca3a4279922';
// Dealing with basic calculations
const cash = async command => {
	const {amount} = command;
	const from = await command.from.toUpperCase();
	const to = await command.to.filter(item => item !== from).map(item => item.toUpperCase());
	// Loading spinner
	console.log();
	const loading = ora({
		text: 'Converting...',
		color: 'green',
		spinner: {
			interval: 150,
			frames: to
		}
	});
	loading.start();
	// Fetching data from ECB
	await got(API, {
		json: true
	}).then(response => {
		money.base = response.body.base;
		money.rates = response.body.rates;
		// Output
		to.forEach(item => {
			if (currencies[item]) {
				loading.succeed(`${chalk.green(money.convert(amount, {from, to: item}).toFixed(3))} ${`(${item})`} ${currencies[item]}`);
			} else {
				loading.warn(`${chalk.yellow(`The "${item}" currency not found `)}`);
			}
		});
		// More output
		console.log(chalk.underline.gray(`\nConversion of ${chalk.bold(from)} ${chalk.bold(amount)}`));
		process.exit(0);
	}).catch(err => {
		/* istanbul ignore if */
		if (err.code === 'ENOTFOUND') {
			loading.fail(chalk.red('Please check your internet connection!\n'));
		} else {
			loading.fail(chalk.red('Internal server error :(\n'));
		}
		process.exit(1);
	});
};

module.exports = cash;
