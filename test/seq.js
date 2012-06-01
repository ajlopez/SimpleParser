
var $ = require('../'),
	assert = require('assert');
	
var twodigits = $.seq($.digit, $.digit);

var result = twodigits('12');	
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 2);
assert.equal(result[0], '1');
assert.equal(result[1], '2');


