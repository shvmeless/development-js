// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.hasOneOf()', () => {
  test('object is empty and no parameters given', () => {

    const original = {}
    const data = [
      { keys: [], expected: false },
      { keys: ['a'], expected: false },
      { keys: ['a', 'b'], expected: false },
      { keys: ['x'], expected: false },
      { keys: ['a', 'x'], expected: false },
    ]

    for (const { keys, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).hasOneOf(...keys)
      expect(r1).toBe(expected)

      const r2 = Dictionary.from(object).hasOneOf(...keys)
      expect(r2).toBe(expected)

      const r3 = new Dictionary(object).hasOneOf(...keys)
      expect(r3).toBe(expected)

    }

  })
  test('no parameters given', () => {

    const original = { a: 1, b: 2, c: 3 }
    const data = [
      { keys: [], expected: false },
      { keys: ['a'], expected: true },
      { keys: ['a', 'b'], expected: true },
      { keys: ['x'], expected: false },
      { keys: ['a', 'x'], expected: true },
    ]

    for (const { keys, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).hasOneOf(...keys)
      expect(r1).toBe(expected)

      const r2 = Dictionary.from(object).hasOneOf(...keys)
      expect(r2).toBe(expected)

      const r3 = new Dictionary(object).hasOneOf(...keys)
      expect(r3).toBe(expected)

    }

  })
})
