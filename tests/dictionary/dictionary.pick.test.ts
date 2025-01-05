// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.pick()', () => {
  test('object is empty', () => {

    const original = {}
    const data = [
      { keys: [], expected: {} },
      { keys: ['a'], expected: {} },
      { keys: ['a', 'b'], expected: {} },
      { keys: ['x'], expected: {} },
      { keys: ['a', 'x'], expected: {} },
    ]

    for (const { keys, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).pick(...keys)
      expect(r1).toStrictEqual(expected)
      expect(object).toStrictEqual(original)
      expect(object).not.toBe(r1)

      const r2 = Dictionary.from(object).pick(...keys)
      expect(r2.value).toStrictEqual(expected)
      expect(object).toStrictEqual(original)
      expect(object).not.toBe(r2.value)

      const r3 = new Dictionary(object).pick(...keys)
      expect(r3.value).toStrictEqual(expected)
      expect(object).toStrictEqual(expected)
      expect(object).toBe(r3.value)

    }

  })
  test('object is not empty', () => {

    const original = { a: 1, b: 2, c: 3 }
    const data = [
      { keys: [], expected: {} },
      { keys: ['a'], expected: { a: 1 } },
      { keys: ['a', 'b'], expected: { a: 1, b: 2 } },
      { keys: ['x'], expected: {} },
      { keys: ['a', 'x'], expected: { a: 1 } },
    ]

    for (const { keys, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).pick(...keys)
      expect(r1).toStrictEqual(expected)
      expect(object).toStrictEqual(original)
      expect(object).not.toBe(r1)

      const r2 = Dictionary.from(object).pick(...keys)
      expect(r2.value).toStrictEqual(expected)
      expect(object).toStrictEqual(original)
      expect(object).not.toBe(r2.value)

      const r3 = new Dictionary(object).pick(...keys)
      expect(r3.value).toStrictEqual(expected)
      expect(object).toStrictEqual(expected)
      expect(object).toBe(r3.value)

    }

  })
})
