const chalk = require('chalk');
const pkg = require('../package.json');

const version = () => {
	console.log(pkg.version);
	process.exit(1);
};

const help = () => {
	console.log(chalk.yellow(`
Usage:

 $ cash <amount> <currency>

 $ cash <command>

Commands:
--help        Display help message
--version     Display version number

Currencies:
 • usd
 • pln
 • rub
 • aud
 • chf
 • eur
 • bgn
 • jpy
 • cad
 • try
 • mxn

 Full list of currencies: http://akep.us/currencies

Examples:

 $ cash 1 usd

 $ cash 1 usd eur pln aud

 $ cash --help

 Cash CLI comes with no warranty.
 The rates are updated daily around 4PM CET every working day.
  `));
	process.exit(1);
};

const helpers = argv => {
  // Version
	if (argv.indexOf('--version') !== -1 || argv.indexOf('-v') !== -1) {
		version();
	}

  // Help
	if (argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1 || !argv.length) {
		help();
	}
};

module.exports = helpers;
