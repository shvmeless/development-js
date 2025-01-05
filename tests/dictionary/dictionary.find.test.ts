// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS

describe('.find()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).find((value) => (value % 2 === 0))
    expect(r1).toBeUndefined()

    const r2 = Dictionary.from(object).find((value) => (value % 2 === 0))
    expect(r2).toBeUndefined()

    const r3 = new Dictionary(object).find((value) => (value % 2 === 0))
    expect(r3).toBeUndefined()

  })
  test('works the values', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).find((value) => (value % 2 === 0))
    expect(r1).toStrictEqual(['b', 2])

    const r2 = dictionary(object).find((value) => (value % 2 < 0))
    expect(r2).toBeUndefined()

    const r3 = Dictionary.from(object).find((value) => (value % 2 === 0))
    expect(r3).toStrictEqual(['b', 2])

    const r4 = Dictionary.from(object).find((value) => (value % 2 < 0))
    expect(r4).toBeUndefined()

    const r5 = new Dictionary(object).find((value) => (value % 2 === 0))
    expect(r5).toStrictEqual(['b', 2])

    const r6 = new Dictionary(object).find((value) => (value % 2 < 0))
    expect(r6).toBeUndefined()

  })
  test('works the keys', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).find((value, key) => (key === 'd' || key === 'b'))
    expect(r1).toStrictEqual(['b', 2])

    const r2 = dictionary(object).find((value, key) => (key === 'x'))
    expect(r2).toBeUndefined()

    const r3 = Dictionary.from(object).find((value, key) => (key === 'd' || key === 'b'))
    expect(r3).toStrictEqual(['b', 2])

    const r4 = Dictionary.from(object).find((value, key) => (key === 'x'))
    expect(r4).toBeUndefined()

    const r5 = new Dictionary(object).find((value, key) => (key === 'd' || key === 'b'))
    expect(r5).toStrictEqual(['b', 2])

    const r6 = new Dictionary(object).find((value, key) => (key === 'x'))
    expect(r6).toBeUndefined()

  })
})
