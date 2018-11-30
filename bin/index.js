#!/usr/bin/env node

const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

const argv = process.argv.slice(2);
helpers(argv);

/* istanbul ignore next */
const command = {
	amount: parseFloat(argv[0]) || 1, /* istanbul ignore next */
	from: argv[1] || config.get('defaultFrom', 'USD'),
	to: (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};

cash(command);
