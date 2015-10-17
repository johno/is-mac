import test from 'ava'
import isMac from './'

test('returns true wtesth a mac', t => {
  t.plan(1)

  t.true(isMac('aa-bb-cc-dd-ee-ff'))
});

test('returns false wtesthout a mac', t => {
  t.plan(1)

  t.false(isMac('aabb'))
});

test('throws an error when a string is not passed', t => {
  t.plan(1)

  t.throws(isMac, TypeError)
});

test('returns false when the string is not an exact match', t => {
  t.plan(1)

  t.true(!isMac('apples aa:bb:cc:dd:ee:ff'));
});
