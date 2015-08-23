/**
 * Imports
 */

import test from 'tape'
import multi from '..'

/**
 * Tests
 */

test('should work', ({plan, pass, end}) => {
  plan(2)
  multi({dispatch: () => pass('pass')})(() => {})([1, 2])
})
