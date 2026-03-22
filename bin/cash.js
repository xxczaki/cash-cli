'use strict';

const mem = require('mem');
const got = require('got');
const {convert} = require('cashify');
const chalk = require('chalk');
const ora = require('ora');
const Conf = require('conf');

const config = new Conf({projectName: 'cash-cli'});

// Get a list of available currencies, based on API source
const currencies = require(`../lib/${config.get('apiName') || 'exchangeRates'}.json`);

// Cache API response for 10 minutes
const memGot = mem(got, {maxAge: 600000});

// API Source
const API = config.get('apiSource');

const cash = async command => {
	const {amount} = command;
	const from = command.from.toUpperCase();
	const to = command.to.filter(item => (item !== from) && !/to/i.test(item)).map(item => item.toUpperCase());

	console.log();
	const loading = ora({
		text: 'Converting...',
		color: 'green',
		spinner: {
			interval: 100,
			frames: to
		}
	});

	loading.start();

	await memGot(API, {
		json: true
	}).then(response => {
		to.forEach(item => {
			if (currencies[item]) {
				const result = convert(amount, {from, to: item, base: response.body.base, rates: response.body.rates}).toFixed(3);

				loading.succeed(`${chalk.green(result)} ${`(${item})`} ${currencies[item]}`);
			} else {
				loading.warn(`${chalk.yellow(`The "${item}" currency not found `)}`);
			}
		});

		console.log(chalk.underline.gray(`\nConversion of ${chalk.bold(from)} ${chalk.bold(amount)}`));
	}).catch(error => {
		if (error.code === 'ENOTFOUND') {
			loading.fail(chalk.red('Please check your internet connection!\n'));
		} else {
			loading.fail(chalk.red('Something went wrong :(\n'), error);
		}

		process.exit(1);
	});
};

module.exports = cash;
