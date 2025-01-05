// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.times()', () => {
  test('object is empty', () => {

    const original = {}
    const data = [
      { values: [], expected: new Map([]) },
      { values: [1], expected: new Map([]) },
      { values: [1, 2], expected: new Map([]) },
      { values: [5], expected: new Map([]) },
      { values: [1, 5], expected: new Map([]) },
    ]

    for (const { values, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).times(...values)
      expect(r1).toStrictEqual(expected)

      const r2 = Dictionary.from(object).times(...values)
      expect(r2).toStrictEqual(expected)

      const r3 = new Dictionary(object).times(...values)
      expect(r3).toStrictEqual(expected)

    }

  })
  test('object is not empty', () => {

    const original = { a: 1, b: 2, c: 3, d: 2, e: 1 }
    const data = [
      { values: [], expected: new Map([[1, 2], [2, 2], [3, 1]]) },
      { values: [1], expected: new Map([[1, 2]]) },
      { values: [1, 3], expected: new Map([[1, 2], [3, 1]]) },
      { values: [5], expected: new Map([]) },
      { values: [1, 5], expected: new Map([[1, 2]]) },
    ]

    for (const { values, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).times(...values)
      expect(r1).toStrictEqual(expected)

      const r2 = Dictionary.from(object).times(...values)
      expect(r2).toStrictEqual(expected)

      const r3 = new Dictionary(object).times(...values)
      expect(r3).toStrictEqual(expected)

    }

  })
})
