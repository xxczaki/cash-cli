const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');
const Conf = require('conf');
const currencies = require('../lib/currencies.json');

const config = new Conf();

// API Source
const API = `http://data.fixer.io/api/latest?access_key=${config.get('key')}`;

// Dealing with basic calculations
const cash = async command => {
	const {amount} = command;
	const from = command.from.toUpperCase();
	const to = command.to.filter(item => item !== from).map(item => item.toUpperCase());
	// Spinner
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
	}).catch(error => {
		/* istanbul ignore if */
		if (error.code === 'ENOTFOUND') {
			loading.fail(chalk.red('Please check your internet connection!\n'));
		} else {
			loading.fail(chalk.red('Internal server error :(\n'));
		}
		process.exit(1);
	});
};

module.exports = cash;
