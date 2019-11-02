import test from 'ava';
import execa from 'execa';
import Conf from 'conf';

const config = new Conf({projectName: 'cash-cli'});

// Delete saved configuration, before running tests
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

test('--save without currencies', async t => {
	const ret = await execa('./bin/index.js', ['--save']);
	t.regex(ret.stdout, /Saved default currencies to/);
});

test('conversion', async t => {
	const ret = await execa('./bin/index.js', ['10', 'usd', 'pln', 'chf']);
	t.regex(ret.stdout, /Conversion of USD 10/);
});

test('without arguments', async t => {
	const ret = await execa('./bin/index.js');
	t.regex(ret.stdout, /Conversion of/);
});

test('ignores `to` keyword (case insensitive)', async t => {
	const ret1 = await execa('./bin/index.js', ['10', 'usd', 'to', 'pln']);
	const ret2 = await execa('./bin/index.js', ['10', 'usd', 'TO', 'pln']);
	const ret3 = await execa('./bin/index.js', ['10', 'usd', 'tO', 'pln']);

	t.notRegex(ret1.stdout, /currency not found/);
	t.notRegex(ret2.stdout, /currency not found/);
	t.notRegex(ret3.stdout, /currency not found/);
});

test('replaces comma', async t => {
	const ret = await execa('./bin/index.js', ['10,2', 'usd', 'pln']);
	t.regex(ret.stdout, /Conversion of USD 10.2/);
});
