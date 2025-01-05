// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.at()', () => {
  test('object is empty', () => {

    const original = {}
    const data = [
      { key: 'x', expected: undefined },
      { key: 'a', expected: undefined },
      { key: 'b', expected: undefined },
      { key: 'c', expected: undefined },
    ]

    for (const { key, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).at(key)
      expect(r1).toBe(expected)

      const r2 = Dictionary.from(object).at(key)
      expect(r2).toBe(expected)

      const r3 = new Dictionary(object).at(key)
      expect(r3).toBe(expected)

    }

  })
  test('object has the key', () => {

    const original = { a: 1, b: 2, c: 3 }
    const data = [
      { key: 'x', expected: undefined },
      { key: 'a', expected: 1 },
      { key: 'b', expected: 2 },
      { key: 'c', expected: 3 },
    ]

    for (const { key, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).at(key)
      expect(r1).toBe(expected)

      const r2 = Dictionary.from(object).at(key)
      expect(r2).toBe(expected)

      const r3 = new Dictionary(object).at(key)
      expect(r3).toBe(expected)
    }

  })
})
