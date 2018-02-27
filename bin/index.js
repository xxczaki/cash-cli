#!/usr/bin/env node

const helpers = require('./helpers.js');
const cash = require('./cash.js');
const Conf = require('conf');
const config = new Conf();

const argv = process.argv.slice(2);
helpers(argv);

const command = {
	amount: argv[0] || 1,
	from: argv[1] || config.get('defaultFrom', 'USD'),
	to: (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};
cash(command);
