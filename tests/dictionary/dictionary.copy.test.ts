// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.copy()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).copy()
    expect(r1).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).copy()
    expect(r2.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).copy()
    expect(r3.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r3.value)

  })
  test('not empty', () => {

    const object = { a: 1, b: 2, c: 3 }

    const r1 = dictionary(object).copy()
    expect(r1).toStrictEqual({ a: 1, b: 2, c: 3 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3 })
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).copy()
    expect(r2.value).toStrictEqual({ a: 1, b: 2, c: 3 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3 })
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).copy()
    expect(r3.value).toStrictEqual({ a: 1, b: 2, c: 3 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3 })
    expect(object).not.toBe(r3.value)

  })
})
