<p align="center">
  <img src="https://i.imgur.com/ddhPSQ4.png" height="64">
  <h3 align="center">cash-cli</h3>
  <p align="center">Convert Currency Rates directly from your Terminal!<p>
  <p align="center">  
	<a href="https://travis-ci.org/xxczaki/cash-cli"><img src="https://travis-ci.org/xxczaki/cash-cli.svg?branch=master" alt="Build Status"></a>
	<a href="https://npmjs.com/package/cash-cli"><img src="https://img.shields.io/npm/dt/cash-cli.svg" alt="npm Downloads"></a>  
	<a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style"></a>  
	<a href='https://github.com/sindresorhus/awesome-nodejs'><img src='https://awesome.re/mentioned-badge.svg' alt='Mentioned in Awesome Node.js' /></a>

</p>
</p>
<p align="center"><img src="https://rawcdn.githack.com/xxczaki/cash-cli/master/cash.svg" alt="SVG"></p>

## Install

via [npm](https://www.npmjs.com/) :package:
```
npm install --global cash-cli
```

via [homebrew](https://brew.sh/) :beer:
```
brew install cash-cli
```
## Usage

> You will need a Fixer.io API key. Get it [here](https://fixer.io/signup/free) for free.

```bash
	Usage
		$ cash <amount> <from> <to>
		$ cash <options>
	Options
		--key -k	        Set API key
		--save -s 			Save default currencies
		--purge -p 			Purge cached API response to get the latest data
	Examples
		$ cash --key [key]
		$ cash 10 usd eur pln
		$ cash --save usd aud 
```

## Available Currencies

See [currencies.json](https://github.com/xxczaki/cash-cli/blob/master/lib/currencies.json) file.

## Thanks:

- [Money.js](http://openexchangerates.github.io/money.js/) for providing great and simple conversion library.
- [Fixer.io](http://fixer.io/) for providing awesome currency conversion API.

## License

[MIT](https://opensource.org/licenses/MIT)
