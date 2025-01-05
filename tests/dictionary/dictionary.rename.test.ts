// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.rename()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).rename((value, key) => (key.toUpperCase()))
    expect(r1).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).rename((value, key) => (key.toUpperCase()))
    expect(r2.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).rename((value, key) => (key.toUpperCase()))
    expect(r3.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).toBe(r3.value)

  })
  test('works with values and keys', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).rename((value, key) => ((value % 2 === 0) ? key.toUpperCase() + value.toString() : undefined))
    expect(r1).toStrictEqual({ B2: 2, D4: 4 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).rename((value, key) => ((value % 2 === 0) ? key.toUpperCase() + value.toString() : undefined))
    expect(r2.value).toStrictEqual({ B2: 2, D4: 4 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).rename((value, key) => ((value % 2 === 0) ? key.toUpperCase() + value.toString() : undefined))
    expect(r3.value).toStrictEqual({ B2: 2, D4: 4 })
    expect(object).toStrictEqual({ B2: 2, D4: 4 })
    expect(object).toBe(r3.value)

  })
})
