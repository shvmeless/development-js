// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.map()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).map((value) => (value * 100))
    expect(r1).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).map((value) => (value * 100))
    expect(r2.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).map((value) => (value * 100))
    expect(r3.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r3.value)

  })
  test('works with values', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).map((value) => ((value % 2 === 0) ? (value * 100) : undefined))
    expect(r1).toStrictEqual({ b: 200, d: 400 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).map((value) => ((value % 2 === 0) ? (value * 100) : undefined))
    expect(r2.value).toStrictEqual({ b: 200, d: 400 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).map((value) => ((value % 2 === 0) ? (value * 100) : undefined))
    expect(r3.value).toStrictEqual({ b: 200, d: 400 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r3.value)

  })
  test('works with keys', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).map((value, key) => (key.toUpperCase()))
    expect(r1).toStrictEqual({ a: 'A', b: 'B', c: 'C', d: 'D', e: 'E' })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).map((value, key) => (key.toUpperCase()))
    expect(r2.value).toStrictEqual({ a: 'A', b: 'B', c: 'C', d: 'D', e: 'E' })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).map((value, key) => (key.toUpperCase()))
    expect(r3.value).toStrictEqual({ a: 'A', b: 'B', c: 'C', d: 'D', e: 'E' })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r3.value)

  })
})
