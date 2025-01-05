// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.set()', () => {
  test('object is empty', () => {

    const original: Record<string, number> = {}
    const data = [
      { key: 'a', value: 0, expected: { a: 0 } },
      { key: 'b', value: 0, expected: { b: 0 } },
      { key: 'c', value: 0, expected: { c: 0 } },
      { key: 'x', value: 0, expected: { x: 0 } },
    ]

    for (const { key, value, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).set(key, value)
      expect(r1).toStrictEqual(expected)
      expect(object).toStrictEqual(original)
      expect(object).not.toBe(r1)

      const r2 = Dictionary.from(object).set(key, value)
      expect(r2.value).toStrictEqual(expected)
      expect(object).toStrictEqual(original)
      expect(object).not.toBe(r2.value)

      const r3 = new Dictionary(object).set(key, value)
      expect(r3.value).toStrictEqual(expected)
      expect(object).toStrictEqual(expected)
      expect(object).toBe(r3.value)

    }

  })
  test('object has the key', () => {

    const original = { a: 1, b: 2, c: 3 }
    const data = [
      { key: 'a', value: 0, expected: { a: 0, b: 2, c: 3 } },
      { key: 'b', value: 0, expected: { a: 1, b: 0, c: 3 } },
      { key: 'c', value: 0, expected: { a: 1, b: 2, c: 0 } },
      { key: 'x', value: 0, expected: { a: 1, b: 2, c: 3, x: 0 } },
    ]

    for (const { key, value, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).set(key, value)
      expect(r1).toStrictEqual(expected)
      expect(object).toStrictEqual(original)
      expect(object).not.toBe(r1)

      const r2 = Dictionary.from(object).set(key, value)
      expect(r2.value).toStrictEqual(expected)
      expect(object).toStrictEqual(original)
      expect(object).not.toBe(r2.value)

      const r3 = new Dictionary(object).set(key, value)
      expect(r3.value).toStrictEqual(expected)
      expect(object).toStrictEqual(expected)
      expect(object).toBe(r3.value)

    }

  })
})
