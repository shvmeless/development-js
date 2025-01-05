// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.clear()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).clear()
    expect(r1).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).clear()
    expect(r2.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).clear()
    expect(r3.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).toBe(r3.value)

  })
  test('object is not empty', () => {

    const object = { a: 1, b: 2, c: 3 }

    const r1 = dictionary(object).clear()
    expect(r1).toStrictEqual({})
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3 })
    expect(object).not.toBe(r1)

    const r2 = Dictionary.from(object).clear()
    expect(r2.value).toStrictEqual({})
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3 })
    expect(object).not.toBe(r2.value)

    const r3 = new Dictionary(object).clear()
    expect(r3.value).toStrictEqual({})
    expect(object).toStrictEqual({})
    expect(object).toBe(r3.value)

  })
})
