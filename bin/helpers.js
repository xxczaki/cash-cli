const pkg = require('../package.json')
const chalk = require('chalk')

const helpers = (argv) => {
  // version
  if (argv.indexOf('--version') !== -1 || argv.indexOf('-v') !== -1) {
    version()
  }

  // help
  if (argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1 || !argv.length) {
    help()
  }
}

const version = () => {
  console.log(pkg.version)
  process.exit(1)
}

const help = () => {
  console.log(chalk.yellow(`
  Usage:

    $ cash <amount> <currency>

  Some currencies: usd, pln, rub, aud, chf, eur

  Examples:

    $ cash 1 usd

    or

    $ cash 1 usd eur pln aud
  `))
  process.exit(1)
}

module.exports = helpers
