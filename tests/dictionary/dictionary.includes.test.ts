// IMPORTS
import { dictionary } from '../../src/libs/dictionary-functions'
import { Dictionary } from '../../src/libs/dictionary'
import { describe, test, expect } from 'vitest'

// TESTS
describe('.includes()', () => {
  test('object is empty', () => {

    const original = {}
    const data = [
      { values: [], expected: false },
      { values: [1], expected: false },
      { values: [1, 2], expected: false },
      { values: [5], expected: false },
      { values: [1, 5], expected: false },
    ]

    for (const { values, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).includes(...values)
      expect(r1).toBe(expected)

      const r2 = Dictionary.from(object).includes(...values)
      expect(r2).toBe(expected)

      const r3 = new Dictionary(object).includes(...values)
      expect(r3).toBe(expected)

    }

  })
  test('object is not empty', () => {

    const original = { a: 1, b: 2, c: 3 }
    const data = [
      { values: [], expected: false },
      { values: [1], expected: true },
      { values: [1, 2], expected: true },
      { values: [5], expected: false },
      { values: [1, 5], expected: false },
    ]

    for (const { values, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).includes(...values)
      expect(r1).toBe(expected)

      const r2 = Dictionary.from(object).includes(...values)
      expect(r2).toBe(expected)

      const r3 = new Dictionary(object).includes(...values)
      expect(r3).toBe(expected)

    }

  })
})
