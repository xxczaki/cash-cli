import test from 'ava';
import execa from 'execa';

test('--help', async t => {
	const ret = await execa.shell('node ./bin/index.js --help');
	t.regex(ret.stdout, /Examples/);
});

test('--version', async t => {
	const {stdout} = await execa.shell('node ./bin/index.js --version');
	t.true(typeof stdout.length === 'number');
});

test('--save', async t => {
	const ret = await execa.shell('node ./bin/index.js --save pln usd eur chf');
	t.regex(ret.stdout, /Saved default currencies to/);
});

test('Test --save output without currencies', async t => {
	const ret = await execa.shell('node ./bin/index.js --save');
	t.regex(ret.stdout, /Saved default currencies to/);
});

test('Test internal server error', async t => {
	const error = await t.throwsAsync(async () => {
		await execa.shell('node ./bin/index.js 10 foo usd');
	});
	t.regex(error.message, /Internal server error/);
});
