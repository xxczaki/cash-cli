const chalk = require('chalk');
const Conf = require('conf');
const pkg = require('../package.json');

const config = new Conf();
// Default currencies config
const saveCurrencies = argv => {
	config.set('defaultFrom', argv[1] || config.get('defaultFrom', 'USD'));
	config.set('defaultTo', (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN']));
	console.log(chalk.green('Saved default currencies to ' + config.path));
	process.exit(0);
};
// Show installed version
const version = () => {
	console.log(pkg.version);
	process.exit(0);
};
// Show help message
const help = () => {
	console.log(`
Usage:

 $ ${chalk.cyan('cash')} ${chalk.green('<amount>')} ${chalk.yellow('<currency>')}

 $ ${chalk.cyan('cash')} ${chalk.magenta('<command>')}

Commands:
${chalk.magenta('--save,  -s')}       Save currencies as default 
${chalk.magenta('--help,  -h')}       Display help message
${chalk.magenta('--version,  -v')}     Display version number

Examples:

 $ ${chalk.cyan('cash')} ${chalk.green('1')} ${chalk.yellow('usd')}

 $ ${chalk.cyan('cash')} ${chalk.green('1')} ${chalk.yellow('usd eur aud')}

 $ ${chalk.cyan('cash')} ${chalk.magenta('--save')} ${chalk.green('usd')} ${chalk.yellow('eur pln aud')}
  `);
	process.exit(0);
};
// Helpers
const helpers = argv => {
	// Version
	if (argv.indexOf('--version') !== -1 || argv.indexOf('-v') !== -1) {
		version();
	}

	// Help
	if (argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1 || !argv.length) {
		help();
	}
	// Save
	if (argv.indexOf('--save') !== -1 || argv.indexOf('-s') !== -1 || !argv.length) {
		saveCurrencies(argv);
	}
};

module.exports = helpers;
