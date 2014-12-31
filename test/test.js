var assert = require('assert');
var isMac = require('..');

describe('is-mac', function() {

  it('should return true with a mac', function() {
    assert.ok(isMac('aa-bb-cc-dd-ee-ff'));
  });

  it('should return false without a mac', function() {
    assert.ok(!isMac('aabb'));
  });

  it('should throw an error when a string is not passed', function() {
    assert.throws(isMac, TypeError, "is-mac expects a string");
  });

  it('should return false when the string is not an exact match', function() {
    assert.ok(!isMac('apples aa:bb:cc:dd:ee:ff'));
  });
});
