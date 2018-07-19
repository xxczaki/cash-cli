import test from 'ava';
import execa from 'execa';

test('Test --help output', async t => {
	const {stdout} = await execa.shell('node ./bin/index.js --help');
	t.true(stdout.length > 0);
});

test('Test --version output', async t => {
	const {stdout} = await execa.shell('node ./bin/index.js --version');
	t.true(stdout.length < 6);
});

test('Test --save output', async t => {
	const {stdout} = await execa.shell('node ./bin/index.js --save pln usd eur chf');
	t.true(stdout.length < 150);
});

test('Test Conversion API (1 currency)', async t => {
	const {stdout} = await execa.shell('node ./bin/index.js 10 usd pln');
	t.true(stdout.length > 0);
});

test('Test Conversion API (10 currencies)', async t => {
	const {stdout} = await execa.shell('node ./bin/index.js 10 usd pln eur aud btc chf gbp azn mmk tnd rsd');
	t.true(stdout.length > 0);
});

test('Test currency not found error', async t => {
	const {stdout} = await execa.shell('node ./bin/index.js 10 foo bar');
	t.true(stdout.length > 0);
});

test('Test internal server error', async t => {
	const error = await t.throws(execa.shell('node ./bin/index.js 10 foo usd'));
	t.regex(error.message, /Internal server error/);
});
