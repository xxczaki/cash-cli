#!/usr/bin/env node

'use strict';

const Conf = require('conf');
const meow = require('meow');
const chalk = require('chalk');
const cash = require('./cash.js');

const config = new Conf();
const argv = process.argv.slice(2);

// CLI configuration
const cli = meow(`
	Usage
		$ cash <amount> <from> <to>
		$ cash <options>
	Options
		--set -s 			Set default currencies
		--key -k	        Set API key
	Examples
		$ cash 10 usd eur pln
		$ cash --set usd aud 
		$ cash --key [key]
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
	amount: parseFloat(argv[0]) || 1,
	from: argv[1] || config.get('defaultFrom', 'USD'),
	to: (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};

cash(command);
