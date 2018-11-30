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

test('Test internal server error', async t => {
	const error = await t.throws(execa.shell('node ./bin/index.js 10 foo usd'));
	t.regex(error.message, /Internal server error/);
});
