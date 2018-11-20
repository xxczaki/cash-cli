import test from 'ava';
import execa from 'execa';

test('Test output without arguments', async t => {
	const ret = await execa.shell('node ./bin/index.js');
	t.regex(ret.stdout, /Usage/);
});

test('Test --help output', async t => {
	const ret = await execa.shell('node ./bin/index.js --help');
	t.regex(ret.stdout, /Examples/);
});

test('Test --version output', async t => {
	const {stdout} = await execa.shell('node ./bin/index.js --version');
	t.true(stdout.length < 6);
});

test('Test --save output', async t => {
	const ret = await execa.shell('node ./bin/index.js --save pln usd eur chf');
	t.regex(ret.stdout, /Saved default currencies to/);
});

test('Test --save output without currencies', async t => {
	const ret = await execa.shell('node ./bin/index.js --save');
	t.regex(ret.stdout, /Saved default currencies to/);
});

test('Test Conversion API (default currencies)', async t => {
	const ret = await execa.shell('node ./bin/index.js 10');
	t.regex(ret.stdout, /10/);
});

test('Test Conversion API with invalid value', async t => {
	const ret = await execa.shell('node ./bin/index.js EXT');
	t.regex(ret.stdout, /Conversion of PLN 1/);
});

test('Test Conversion API (1 currency)', async t => {
	const ret = await execa.shell('node ./bin/index.js 10 usd pln');
	t.regex(ret.stderr, /Polish Zloty/);
});

test('Test Conversion API (10 currencies)', async t => {
	const ret = await execa.shell('node ./bin/index.js 10 usd pln eur aud btc chf gbp azn mmk tnd rsd');
	t.regex(ret.stdout, /Conversion of USD 10/);
});

test('Test currency not found error', async t => {
	const ret = await execa.shell('node ./bin/index.js 10 foo bar');
	t.regex(ret.stderr, /The "BAR" currency not found/);
});

test('Test internal server error', async t => {
	const error = await t.throws(execa.shell('node ./bin/index.js 10 foo usd'));
	t.regex(error.message, /Internal server error/);
});
