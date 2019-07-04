import test from 'ava';
import execa from 'execa';
import Conf from 'conf';

const config = new Conf({projectName: 'cash-cli'});

// Delete an API key, before running tests
config.clear();

test('--help', async t => {
	const ret = await execa('./bin/index.js', ['--help']);
	t.regex(ret.stdout, /Examples/);
});

test('--version', async t => {
	const {stdout} = await execa('./bin/index.js', ['--version']);
	t.true(typeof stdout.length === 'number');
});

test('--save', async t => {
	const ret = await execa('./bin/index.js', ['--save', 'pln', 'usd', 'eur', 'chf']);
	t.regex(ret.stdout, /Saved default currencies to/);
});

test('Test --save output without currencies', async t => {
	const ret = await execa('./bin/index.js', ['--save']);
	t.regex(ret.stdout, /Saved default currencies to/);
});

test('Test conversion without API key', async t => {
	const error = await t.throwsAsync(async () => {
		await execa('./bin/index.js', ['10', 'foo', 'usd']);
	});

	t.regex(error.stdout, /Fixer.io API key not found/);
});

test('Test setting invalid API key', async t => {
	const error = await t.throwsAsync(async () => {
		await execa('./bin/index.js', ['--key', 'foo']);
	});

	t.regex(error.stdout, /Provided API key seems invalid/);
});
