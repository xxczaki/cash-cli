#!/usr/bin/env node

'use strict';

const Conf = require('conf');
const meow = require('meow');
const chalk = require('chalk');
const cash = require('./cash.js');

const config = new Conf({projectName: 'cash-cli'});
const argv = process.argv.slice(2);

// CLI configuration
const cli = meow(`
	Usage
		$ cash <amount> <from> <to>
		$ cash <options>
	Options
		--key -k	        Set API key
		--save -s 			Save default currencies
	Examples
		$ cash --key [key]
		$ cash 10 usd eur pln
		$ cash --save usd aud 
`, {
	flags: {
		key: {
			type: 'string',
			alias: 'k'
		}
	}
});

// Set API key
if (cli.flags.key) {
	if (/^([a-z0-9]{32})+/i.test(cli.flags.key) === false) {
		console.log(chalk.red('Provided API key seems invalid, please try again!'));
		process.exit(1);
	}

	config.set('key', cli.flags.key);
	console.log(chalk.green('Saved API key to ' + config.path));
	process.exit(0);
}

// Save default currencies
if (argv.indexOf('--save') !== -1 || argv.indexOf('-s') !== -1) {
	config.set('defaultFrom', argv[1] || config.get('defaultFrom', 'USD'));
	config.set('defaultTo', (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN']));
	console.log(chalk.green('Saved default currencies to ' + config.path));
	process.exit(0);
}

// Handle amount & currencies
const command = {
	amount: Number(argv[0]) || 1,
	from: argv[1] || config.get('defaultFrom', 'USD'),
	to: (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};

// Refuse to run conversion, if there is no API key
if (config.get('key') === undefined) {
	console.log(`\n
	${chalk.red.bold('Fixer.io API key not found!')}
	${chalk.cyan('Get it here for free: https://fixer.io/signup/free')}
	${chalk.cyan('Then run `cash --key [key]` to save it')}
\n`);
	process.exit(1);
} else {
	cash(command);
}
