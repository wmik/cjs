import test from 'ava';
import pkg from '.';

test('pkg version', t => {
	t.is(pkg.version, '0.0.0-development');
});
