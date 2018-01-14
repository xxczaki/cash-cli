const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

updateNotifier({pkg}).notify();

const version = () => {
	console.log(pkg.version);
	process.exit(1);
};

const help = () => {
	console.log(`
Usage:

 $ ${chalk.cyan('cash')} ${chalk.green('<amount>')} ${chalk.yellow('<currency>')}

 $ ${chalk.cyan('cash')} ${chalk.magenta('<command>')}

Commands:
${chalk.magenta('--help,  -h')}       Display help message 
${chalk.magenta('--version,  -v')}     Display version number    

 List of currencies: http://akep.us/currencies

Examples:

 $ ${chalk.cyan('cash')} ${chalk.green('1')} ${chalk.yellow('usd')}

 $ ${chalk.cyan('cash')} ${chalk.green('1')} ${chalk.yellow('usd eur pln aud')}

 $ ${chalk.cyan('cash')} ${chalk.magenta('--help')}
  `);
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
