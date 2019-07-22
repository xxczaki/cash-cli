'use strict';

const mem = require('mem');
const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');
const Conf = require('conf');
const currencies = require('../lib/currencies.json');

const config = new Conf({projectName: 'cash-cli'});

// Cache API response for 10 minutes
const memGot = mem(got, {maxAge: 600000});

// API Source
const API = `http://data.fixer.io/api/latest?access_key=${config.get('key')}`;

const cash = async command => {
	const {amount} = command;
	const from = command.from.toUpperCase();
	const to = command.to.filter(item => item !== from).map(item => item.toUpperCase());

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
		money.base = response.body.base;
		money.rates = response.body.rates;

		to.forEach(item => {
			if (currencies[item]) {
				loading.succeed(`${chalk.green(money.convert(amount, {from, to: item}).toFixed(3))} ${`(${item})`} ${currencies[item]}`);
			} else {
				loading.warn(`${chalk.yellow(`The "${item}" currency not found `)}`);
			}
		});

		console.log(chalk.underline.gray(`\nConversion of ${chalk.bold(from)} ${chalk.bold(amount)}`));
	}).catch(error => {
		if (error.code === 'ENOTFOUND') {
			loading.fail(chalk.red('Please check your internet connection!\n'));
		} else {
			loading.fail(chalk.red('Something went wrong :(\n'));
		}

		process.exit(1);
	});
};

module.exports = cash;
