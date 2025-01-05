// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.filter()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).filter((value) => (value % 2 === 0))
    expect(r1).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).filter((value) => (value % 2 === 0))
    expect(r2.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).filter((value) => (value % 2 === 0))
    expect(r3.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).toBe(r3.value)

  })
  test('works with values', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).filter((value) => (value % 2 === 0))
    expect(r1).toStrictEqual({ b: 2, d: 4 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).filter((value) => (value % 2 === 0))
    expect(r2.value).toStrictEqual({ b: 2, d: 4 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).filter((value) => (value % 2 === 0))
    expect(r3.value).toStrictEqual({ b: 2, d: 4 })
    expect(object).toStrictEqual({ b: 2, d: 4 })
    expect(object).toBe(r3.value)

  })
  test('works with values', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).filter((value) => (value % 2 < 0))
    expect(r1).toStrictEqual({})
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).filter((value) => (value % 2 < 0))
    expect(r2.value).toStrictEqual({})
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).filter((value) => (value % 2 < 0))
    expect(r3.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).toBe(r3.value)

  })
  test('works with keys', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).filter((value, key) => (key === 'b' || key === 'd'))
    expect(r1).toStrictEqual({ b: 2, d: 4 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).filter((value, key) => (key === 'b' || key === 'd'))
    expect(r2.value).toStrictEqual({ b: 2, d: 4 })
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).filter((value, key) => (key === 'b' || key === 'd'))
    expect(r3.value).toStrictEqual({ b: 2, d: 4 })
    expect(object).toStrictEqual({ b: 2, d: 4 })
    expect(object).toBe(r3.value)

  })
  test('works with keys', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).filter((value, key) => (key === 'x'))
    expect(r1).toStrictEqual({})
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).filter((value, key) => (key === 'x'))
    expect(r2.value).toStrictEqual({})
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).filter((value, key) => (key === 'x'))
    expect(r3.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).toBe(r3.value)

  })
})
