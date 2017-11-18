const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');
const currencies = require('../lib/currencies.json');

const API = 'https://api.fixer.io/latest';

const cashh = command => {
	const amount = command.amount;
	const from = command.from.toUpperCase();
	const to = command.to.filter(item => item !== from).map(item => item.toUpperCase());

	console.log();
	const loading = ora({
		text: 'Converting currency...',
		color: 'green',
		spinner: {
			interval: 200,
			frames: to
		}
	});
	loading.start();

	got(API, {
		json: true
	}).then(response => {
		money.base = response.body.base;
		money.rates = response.body.rates;

		to.map(item => {
			if (currencies[item]) {
				loading.succeed(`${chalk.green(money.convert(amount, {from, to: item}).toFixed(2))} ${`(${item})`} ${currencies[item]}`);
			} else {
				loading.warn(`${chalk.yellow(` The ${item} currency not found `)}`);
			}
		});

		console.log();
		console.log(chalk.underline.gray(` Conversion of ${chalk.bold(from)} ${chalk.bold(amount)}`));
		process.exit(1);
	}).catch(err => {
		if (err.code === 'ENOTFOUND') {
			loading.fail(chalk.red('   Please check your internet connection.\n'));
		} else {
			loading.fail(chalk.red('   Internal server error... \n'));
		}

		process.exit(1);
	});
};

module.exports = cashh;
