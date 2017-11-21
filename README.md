<p align="center">
  <img src="https://i.imgur.com/ddhPSQ4.png" height="64">
  <h3 align="center">cash-cli</h3>
  <p align="center">Convert Currency Rates directly from your Terminal!<p>
  <p align="center"><a href="https://www.npmjs.com/package/cash-cli"><img src="https://badge.fury.io/js/cash-cli.svg" alt="npm Package"></a> <a href="https://travis-ci.org/xxczaki/cash-cli"><img src="https://travis-ci.org/xxczaki/cash-cli.svg?branch=master" alt="Build Status"></a> <a href="https://github.com/xxczaki/cash-cli"><img src="https://david-dm.org/xxczaki/cash-cli.svg" alt="David"></a></p>
</p>

## Installation

**[Click here for more detailed installation guide!](https://github.com/xxczaki/cash-cli/wiki/Installation)**

### :package: npm<br>![](https://badge.fury.io/js/cash-cli.svg)

```
npm install -g cash-cli
```

## Usage

```
cash <amount> <currency code>
```

for example:

```
cash 1 usd
```

or

```
cash 10 usd eur rub pln
```

## Available Currencies:

See [currencies.json](https://github.com/xxczaki/cash-cli/blob/master/lib/currencies.json) file.

## npm Dependencies [![Known Vulnerabilities](https://snyk.io/test/github/xxczaki/cash-cli/badge.svg)](https://snyk.io/test/github/xxczaki/cash-cli)

- [chalk](https://www.npmjs.com/package/chalk)
- [got](https://www.npmjs.com/package/got)
- [money](https://www.npmjs.com/package/money)
- [ora](https://www.npmjs.com/package/ora)
- [standard](https://www.npmjs.com/package/standard)

## Thanks:

- [Money.js](http://openexchangerates.github.io/money.js/) for providing great and simple conversion library.
- [fixer.io](http://fixer.io/) for providing fast currency conversion API.

## License

[MIT](https://opensource.org/licenses/MIT) © Anthony Kepinski

`[![Build Status](https://travis-ci.org/xxczaki/cash-cli.svg?branch=master)](https://travis-ci.org/xxczaki/cash-cli) [![CircleCI](https://circleci.com/gh/xxczaki/cash-cli.svg?style=svg)](https://circleci.com/gh/xxczaki/cash-cli)`
