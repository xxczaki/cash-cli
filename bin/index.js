#!/usr/bin/env node

'use strict';

const Conf = require('conf');
const getopts = require('getopts');
const chalk = require('chalk');
const prompts = require('prompts');
const cash = require('./cash.js');

const config = new Conf({projectName: 'cash-cli'});
const argv = process.argv.slice(2);

const options = getopts(argv, {
	alias: {
		help: 'h',
		version: 'v',
		api: 'a',
		save: 's',
		json: 'j'
	}
});

if (options.help) {
	console.log(`
	Usage: 
	  $ cash <amount> <from> <to>
	  $ cash <options>
	Options:
	  --api -a	        				 Configure API source
	  --save -s <from> <to...>			         Save default currencies
	  -v, --version                                          Print the version
	  -h, --help                                             Print this help
	Examples:
	  $ cash --api
	  $ cash 10 usd eur pln
	  $ cash --save usd eur pln chf
  `);
	process.exit(0);
}

if (options.version) {
	console.log(require('../package.json').version);
	process.exit(0);
}

// Handle amount & currencies
const command = {
	amount: argv[0] ? Number(argv[0].replace(',', '.')) : 1,
	from: argv[1] || config.get('defaultFrom', 'USD'),
	to: (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};

// Configure API source
if (options.api) {
	const questions = [
		{
			type: 'select',
			name: 'api',
			message: 'Choose API source:',
			choices: [
				{title: 'Exchange Rates API', description: 'Supports 32 currencies, does require an API key', value: 'exchangeRates'},
				{title: 'Fixer', description: 'Supports 170 currencies, does require an API key (free plan available)', value: 'fixer'},
				{title: 'Currency Layer', description: 'Supports 168 currencies, does require an API key (free plan available)', value: 'currencyLayer'},
				{title: 'Open Exchange Rates', description: 'Supports 200+ currencies, does require an API key (free plan available)', value: 'openExchangeRates'}
			],
			initial: 0
		},
                {
                        type: prev => prev === 'exchangeRates' ? 'text' : null,
                        name: 'key',
                        message: 'Please enter your API Key. You can get it here: https://manage.exchangeratesapi.io/dashboard',
                        validate: value => /^([a-z0-9]{32})+/i.test(value) === false ? 'API key seems invalid, try again!' : true
                },
		{
			type: prev => prev === 'fixer' ? 'text' : null,
			name: 'key',
			message: 'Please enter your API Key. You can get it here: https://fixer.io/product',
			validate: value => /^([a-z0-9]{32})+/i.test(value) === false ? 'API key seems invalid, try again!' : true
		},
		{
			type: prev => prev === 'currencyLayer' ? 'text' : null,
			name: 'key',
			message: 'Please enter your API Key. You can get it here: https://currencylayer.com/product',
			validate: value => /^([a-z0-9]{32})+/i.test(value) === false ? 'API key seems invalid, try again!' : true
		},
		{
			type: prev => prev === 'openExchangeRates' ? 'text' : null,
			name: 'key',
			message: 'Please enter your App ID. You can get it here: https://openexchangerates.org/signup',
			validate: value => /^([a-z0-9]{32})+/i.test(value) === false ? 'App ID seems invalid, try again!' : true
		}
	];

	(async () => {
		const response = await prompts(questions);

		if (response.key !== undefined) {
                        
			if (response.api === 'exchangeRates') {
                                await config.set('apiSource', `http://api.exchangeratesapi.io/latest?access_key=${response.key}`);
                                await config.set('apiName', 'exchangeRates');
                        } else if (response.api === 'fixer') {
				await config.set('apiSource', `http://data.fixer.io/api/latest?access_key=${response.key}`);
				await config.set('apiName', 'fixer');
			} else if (response.api === 'currencyLayer') {
				await config.set('apiSource', `https://apilayer.net/api/live?access_key=${response.key}`);
				await config.set('apiName', 'currencyLayer');
			} else if (response.api === 'openExchangeRates') {
				await config.set('apiSource', `https://openexchangerates.org/api/latest.json?app_id=${response.key}`);
				await config.set('apiName', 'openExchangeRates');
			}

			console.log(chalk.green('\nDone! Now run `cash --help` to learn how to use this tool.\n'));
			console.log(chalk.green('Remember, you can always change the API source, by running `cash --api`'));
			process.exit(0);
		}
	})();
} else if (argv.includes('--save') || argv.includes('-s')) {
	config.set('defaultFrom', argv[1] || config.get('defaultFrom', 'USD'));
	config.set('defaultTo', (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN']));
	console.log(chalk.green('Saved default currencies to ' + config.path));
	process.exit(0);
} else {
	cash(command);
}
