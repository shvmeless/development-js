// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.merge()', () => {
  test('object is empty', () => {

    const original = {}
    const data: Array<{ values: Array<Record<string, number>>, expected: Record<string, number> }> = [
      { values: [], expected: {} },
      { values: [{ a: 100 }], expected: { a: 100 } },
      { values: [{ a: 100 }, { b: 200, c: 300 }], expected: { a: 100, b: 200, c: 300 } },
      { values: [{ x: 500 }], expected: { x: 500 } },
      { values: [{ a: 100 }, { b: 200, x: 500 }], expected: { a: 100, b: 200, x: 500 } },
    ]

    for (const { values, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).merge(...values)
      expect(r1).toStrictEqual(expected)
      expect(object).toStrictEqual({})
      expect(object).not.toBe(r1)

      const r2 = Dictionary.from(object).merge(...values)
      expect(r2.value).toStrictEqual(expected)
      expect(object).toStrictEqual({})
      expect(object).not.toBe(r2.value)

      const r3 = new Dictionary(object).merge(...values)
      expect(r3.value).toStrictEqual(expected)
      expect(object).toStrictEqual(expected)
      expect(object).toBe(r3.value)

    }

  })
  test('object is not empty', () => {

    const original = { a: 1, b: 2, c: 3 }
    const data: Array<{ values: Array<Record<string, number>>, expected: Record<string, number> }> = [
      { values: [], expected: { a: 1, b: 2, c: 3 } },
      { values: [{ a: 100 }], expected: { a: 100, b: 2, c: 3 } },
      { values: [{ a: 100 }, { b: 200, c: 300 }], expected: { a: 100, b: 200, c: 300 } },
      { values: [{ x: 500 }], expected: { a: 1, b: 2, c: 3, x: 500 } },
      { values: [{ a: 100 }, { b: 200, x: 500 }], expected: { a: 100, b: 200, c: 3, x: 500 } },
    ]

    for (const { values, expected } of data) {

      const object = { ...original }

      const r1 = dictionary(object).merge(...values)
      expect(r1).toStrictEqual(expected)
      expect(object).toStrictEqual(original)
      expect(object).not.toBe(r1)

      const r2 = Dictionary.from(object).merge(...values)
      expect(r2.value).toStrictEqual(expected)
      expect(object).toStrictEqual(original)
      expect(object).not.toBe(r2.value)

      const r3 = new Dictionary(object).merge(...values)
      expect(r3.value).toStrictEqual(expected)
      expect(object).toStrictEqual(expected)
      expect(object).toBe(r3.value)

    }

  })
})
