
var $ = require('../'),
	assert = require('assert');
	
assert.ok(!$.digit('A'));
assert.ok(!$.digit('Z'));

assert.ok(!$.digit('a'));
assert.ok(!$.digit('z'));

assert.ok($.digit('0'));
assert.ok($.digit('1'));
assert.ok($.digit('2'));
assert.ok($.digit('3'));
assert.ok($.digit('4'));
assert.ok($.digit('5'));
assert.ok($.digit('6'));
assert.ok($.digit('7'));
assert.ok($.digit('8'));
assert.ok($.digit('9'));

assert.ok(!$.digit('\t'));
assert.ok(!$.digit('\r'));
assert.ok(!$.digit('\n'));
assert.ok(!$.digit(' '));
assert.ok(!$.digit(''));
assert.ok(!$.digit(null));
assert.ok(!$.digit());

