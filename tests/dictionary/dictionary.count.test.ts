// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.count()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).count((value) => (value % 2 === 0))
    expect(r1).toStrictEqual(0)

    const r2 = Dictionary.from(object).count((value) => (value % 2 === 0))
    expect(r2).toStrictEqual(0)

    const r3 = new Dictionary(object).count((value) => (value % 2 === 0))
    expect(r3).toStrictEqual(0)

  })
  test('works with values', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).count((value) => (value % 2 === 0))
    expect(r1).toStrictEqual(2)

    const r2 = Dictionary.from(object).count((value) => (value % 2 === 0))
    expect(r2).toStrictEqual(2)

    const r3 = new Dictionary(object).count((value) => (value % 2 === 0))
    expect(r3).toStrictEqual(2)

  })
  test('works with keys', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).count((value, key) => (key === 'b' || key === 'd'))
    expect(r1).toStrictEqual(2)

    const r2 = Dictionary.from(object).count((value, key) => (key === 'b' || key === 'd'))
    expect(r2).toStrictEqual(2)

    const r3 = new Dictionary(object).count((value, key) => (key === 'b' || key === 'd'))
    expect(r3).toStrictEqual(2)

  })
})
