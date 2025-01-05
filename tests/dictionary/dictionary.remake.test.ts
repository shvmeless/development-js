// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.remake()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).remake((value, key) => ([key.toUpperCase(), (value * 100)]))
    expect(r1).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).remake((value, key) => ([key.toUpperCase(), (value * 100)]))
    expect(r2.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).remake((value, key) => ([key.toUpperCase(), (value * 100)]))
    expect(r3.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r3.value)

  })
  test('works with values and keys', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).remake((value, key) => ((value % 2 === 0) ? [key.toUpperCase(), (value * 100)] : undefined))
    expect(r1).toStrictEqual({ B: 200, D: 400 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).remake((value, key) => ((value % 2 === 0) ? [key.toUpperCase(), (value * 100)] : undefined))
    expect(r2.value).toStrictEqual({ B: 200, D: 400 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).remake((value, key) => ((value % 2 === 0) ? [key.toUpperCase(), (value * 100)] : undefined))
    expect(r3.value).toStrictEqual({ B: 200, D: 400 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r3.value)

  })
})
