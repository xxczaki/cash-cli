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

## Highlights

* Fast & Simple
* Supports multiple APIs
* Caches API results

## Install

via [npm](https://www.npmjs.com/) :package: ![npm](https://img.shields.io/npm/v/cash-cli.svg)
```
npm install --location=global cash-cli
```

via [homebrew](https://brew.sh/) :beer: ![homebrew](https://img.shields.io/homebrew/v/cash-cli.svg)
```
brew install cash-cli
```
## Usage

```bash
	Usage
		$ cash <amount> <from> <to>
		$ cash <options>
	Options
		--api -a	        Configure API source
		--save -s 			Save default currencies
	Examples
		$ cash --api
		$ cash 10 usd eur pln
		$ cash --save usd aud
```

## Supported APIs

Right now, `cash-cli` supports the following APIs:

- [Exchange Rates API (default)](https://exchangeratesapi.io/)
- [Fixer](https://fixer.io/)
- [Currency Layer](https://currencylayer.com/)
- [Open Exchange Rates](https://openexchangerates.org/)

If you want `cash-cli` to support your favorite API, please [open an issue](https://github.com/xxczaki/cash-cli/issues/new) :smile:

## Related projects

- [gocash](https://github.com/basebandit/gocash) - Copy of cash-cli, written in golang.

## License

[MIT](https://opensource.org/licenses/MIT)
