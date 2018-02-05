<p align="center">
  <img src="https://i.imgur.com/ddhPSQ4.png" height="64">
  <h3 align="center">cash-cli</h3>
  <p align="center">Convert Currency Rates directly from your Terminal!<p>
  <p align="center"><a href="https://www.npmjs.com/package/cash-cli"><img src="https://badge.fury.io/js/cash-cli.svg" alt="npm Package"></a>  <a href="https://travis-ci.org/xxczaki/cash-cli"><img src="https://travis-ci.org/xxczaki/cash-cli.svg?branch=master" alt="Build Status"></a>  <a href="https://circleci.com/gh/xxczaki/cash-cli/"><img src="https://circleci.com/gh/xxczaki/cash-cli.svg?style=svg" alt="Build Status"></a>  <a href="https://npmjs.com/package/cash-cli"><img src="https://img.shields.io/npm/dt/cash-cli.svg" alt="npm Downloads"></a>  <a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style"></a>  <a href="https://www.david-dm.org/xxczaki/cash-cli"><img src="https://david-dm.org/xxczaki/cash-cli.svg" alt="David"></a> <a class="badge-align" href="https://www.codacy.com/app/xxczaki/cash-cli?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=xxczaki/cash-cli&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/9f001c6bc6c544faa6b3b09008f01e10"/></a> <a href='https://github.com/agarrharr/awesome-cli-apps'><img src='https://awesome.re/mentioned-badge.svg' alt='Mentioned in Awesome CLI Apps' /></a>

</p>
</p>
<p align="center"><img src="https://i.imgur.com/2lWAUKK.gif" alt="Screenshot"></p>

[:rocket: Discuss it on Product Hunt](https://www.producthunt.com/posts/cash-cli)
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

## Available Currencies:

See [currencies.json](https://github.com/xxczaki/cash-cli/blob/master/lib/currencies.json) file.

## npm Dependencies [![Known Vulnerabilities](https://snyk.io/test/github/xxczaki/cash-cli/badge.svg)](https://snyk.io/test/github/xxczaki/cash-cli)

- [chalk](https://www.npmjs.com/package/chalk)
- [got](https://www.npmjs.com/package/got)
- [money](https://www.npmjs.com/package/money)
- [ora](https://www.npmjs.com/package/ora)
- [update-notifier](https://www.npmjs.com/package/update-notifier)
- [xo](https://www.npmjs.com/package/xo)

## Thanks:

- [Money.js](http://openexchangerates.github.io/money.js/) for providing great and simple conversion library.
- [fixer.io](http://fixer.io/) for providing fast currency conversion API.

## License

[MIT](https://opensource.org/licenses/MIT) © Anthony Kepinski

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fxxczaki%2Fcash-cli.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fxxczaki%2Fcash-cli?ref=badge_large)
