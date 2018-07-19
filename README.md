<p align="center">
  <img src="https://i.imgur.com/ddhPSQ4.png" height="64">
  <h3 align="center">cash-cli</h3>
  <p align="center">Convert Currency Rates directly from your Terminal!<p>
  <p align="center">  
	<a href="https://travis-ci.org/xxczaki/cash-cli"><img src="https://travis-ci.org/xxczaki/cash-cli.svg?branch=master" alt="Build Status"></a>
	  <a href='https://coveralls.io/github/xxczaki/cash-cli?branch=master'><img src='https://coveralls.io/repos/github/xxczaki/cash-cli/badge.svg?branch=master' alt='Coverage Status' /></a>
	<a href="https://npmjs.com/package/cash-cli"><img src="https://img.shields.io/npm/dt/cash-cli.svg" alt="npm Downloads"></a>  
	<a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style"></a>  
	<a href="https://www.david-dm.org/xxczaki/cash-cli"><img src="https://david-dm.org/xxczaki/cash-cli.svg" alt="David"></a>
	<a href='https://github.com/agarrharr/awesome-cli-apps'><img src='https://awesome.re/mentioned-badge.svg' alt='Mentioned in Awesome CLI Apps' /></a>

</p>
</p>
<p align="center"><img src="https://cdn.rawgit.com/xxczaki/cash-cli/aa171028/cash.svg" alt="SVG"></p>

<p align="center"><a href="https://github.com/xxczaki/cash-cli/wiki/Introducing-cash-cli-2.0!">🎉 Introducing cash-cli 2.0 🎉</a><p>

## Installation using :package: npm

**[Click here for more detailed installation guide](https://github.com/xxczaki/cash-cli/wiki/1.-Installation)**

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

## Available Currencies

See [currencies.json](https://github.com/xxczaki/cash-cli/blob/master/lib/currencies.json) file.

## npm Dependencies [![Known Vulnerabilities](https://snyk.io/test/github/xxczaki/cash-cli/badge.svg)](https://snyk.io/test/github/xxczaki/cash-cli)

- [chalk](https://www.npmjs.com/package/chalk)
- [conf](https://www.npmjs.com/package/conf)
- [got](https://www.npmjs.com/package/got)
- [money](https://www.npmjs.com/package/money)
- [ora](https://www.npmjs.com/package/ora)
- [xo](https://www.npmjs.com/package/xo)

## Thanks:

- [Money.js](http://openexchangerates.github.io/money.js/) for providing great and simple conversion library.
- [fixer.io](http://fixer.io/) for providing fast currency conversion API.

## License

[MIT](https://opensource.org/licenses/MIT) © Anthony Kepinski

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fxxczaki%2Fcash-cli.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fxxczaki%2Fcash-cli?ref=badge_large)

