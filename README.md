<p align="center">
  <img src="https://i.imgur.com/ddhPSQ4.png" height="64">
  <h3 align="center">cash-cli</h3>
  <p align="center">Convert Currency Rates directly from your Terminal!<p>
  <p align="center">  
	<a href="https://travis-ci.org/xxczaki/cash-cli"><img src="https://travis-ci.org/xxczaki/cash-cli.svg?branch=master" alt="Build Status"></a>
	  <a href='https://coveralls.io/github/xxczaki/cash-cli'><img src='https://coveralls.io/repos/github/xxczaki/cash-cli/badge.svg' alt='Coverage Status' /></a>
	<a href="https://npmjs.com/package/cash-cli"><img src="https://img.shields.io/npm/dt/cash-cli.svg" alt="npm Downloads"></a>  
	<a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style"></a>  
	<a href="https://www.david-dm.org/xxczaki/cash-cli"><img src="https://david-dm.org/xxczaki/cash-cli.svg" alt="David"></a>
	<a href='https://github.com/sindresorhus/awesome-nodejs'><img src='https://awesome.re/mentioned-badge.svg' alt='Mentioned in Awesome Node.js' /></a>

</p>
</p>
<p align="center"><img src="https://rawcdn.githack.com/xxczaki/cash-cli/master/cash.svg" alt="SVG"></p>

<p align="center"><a href="https://github.com/xxczaki/cash-cli/wiki/Introducing-cash-cli-2.0!">🎉 Introducing cash-cli 2.0 🎉</a><p>

## Installation

via [npm](https://www.npmjs.com/) :package:
```
npm install --global cash-cli
```

via [homebrew](https://brew.sh/) :beer:
```
brew install cash-cli
```
## Usage

```bash
  Usage
    $ cash <amount> <from> <to>

  Options
    --help -h     Display help message
    --version -v  Display version number
    --save -s     Save currencies as default

  Examples
    $ cash 10 usd
    $ cash 10 usd eur aud
    $ cash --save usd eur pln aud
```

## Available Currencies

See [currencies.json](https://github.com/xxczaki/cash-cli/blob/master/lib/currencies.json) file.

## Thanks:

- [Money.js](http://openexchangerates.github.io/money.js/) for providing great and simple conversion library.
- [fixer.io](http://fixer.io/) for providing fast currency conversion API.

## License

[MIT](https://opensource.org/licenses/MIT)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fxxczaki%2Fcash-cli.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fxxczaki%2Fcash-cli?ref=badge_large)

