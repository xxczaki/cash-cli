const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');
const currencies = require('../lib/currencies.json');
// API Source with access key
const API = 'https://data.fixer.io/api/latest?access_key=602f9c1bb2f839c76acceca3a4279922';
// Dealing with basic calculations
const cash = command => {
	const {amount} = command;
	const from = command.from.toUpperCase();
	const to = command.to.filter(item => item !== from).map(item => item.toUpperCase());
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
	got(API, {
		json: true
	}).then(response => {
		money.base = response.body.base;
		money.rates = response.body.rates;
		// Output
		to.forEach(item => {
			if (currencies[item]) {
				loading.succeed(`${chalk.green(money.convert(amount, {from, to: item}).toFixed(2))} ${`(${item})`} ${currencies[item]}`);
			} else {
				loading.warn(`${chalk.yellow(`The "${item}" currency not found `)}`);
			}
		});
		// More output
		console.log(chalk.underline.gray(`\nConversion of ${chalk.bold(from)} ${chalk.bold(amount)}`));
		process.exit(1);
	}).catch(err => {
		if (err.code === 'ENOTFOUND') {
			loading.fail(chalk.red('Please check your internet connection!\n'));
		} else {
			loading.fail(chalk.red('Internal server error :(\n'));
		}

		process.exit(1);
	});
};

module.exports = cash;
