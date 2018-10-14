import test from 'ava'
import isMac from './'

test('returns true with a mac', t => {
  t.plan(1)

  t.true(isMac('aa-bb-cc-dd-ee-ff'))
})

test('returns false without a mac', t => {
  t.plan(1)

  t.false(isMac('aabb'))
})

test('throws an error when a string is not passed', t => {
  t.plan(1)

  t.throws(isMac, TypeError)
})

test('returns false when the string is not an exact match', t => {
  t.plan(1)

  t.false(isMac('apples aa:bb:cc:dd:ee:ff'))
})

test('returns false when the string uses mixed delimiters', t => {
  t.plan(2)

  t.false(isMac('aa:bb:cc:dd:ee-ff'))
  t.false(isMac('aa-bb-cc-dd:ee-ff'))
})
