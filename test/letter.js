
var $ = require('../'),
	assert = require('assert');
	
assert.ok($.letter('A'));
assert.ok($.letter('Z'));

assert.ok($.letter('a'));
assert.ok($.letter('z'));

assert.ok(!$.letter('0'));
assert.ok(!$.letter('0'));
assert.ok(!$.letter('\t'));
assert.ok(!$.letter('\r'));
assert.ok(!$.letter('\n'));
assert.ok(!$.letter(' '));
assert.ok(!$.letter(''));
assert.ok(!$.letter(null));
assert.ok(!$.letter());

