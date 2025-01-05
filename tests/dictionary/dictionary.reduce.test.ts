// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.reduce()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).reduce((prev, value) => (prev + value), 0)
    expect(r1).toStrictEqual(0)

    const r2 = Dictionary.from(object).reduce((prev, value) => (prev + value), 0)
    expect(r2).toStrictEqual(0)

    const r3 = new Dictionary(object).reduce((prev, value) => (prev + value), 0)
    expect(r3).toStrictEqual(0)

  })
  test('works with values', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).reduce((prev, value) => (prev + value * 100), 0)
    expect(r1).toStrictEqual(1500)

    const r2 = Dictionary.from(object).reduce((prev, value) => (prev + value * 100), 0)
    expect(r2).toStrictEqual(1500)

    const r3 = new Dictionary(object).reduce((prev, value) => (prev + value * 100), 0)
    expect(r3).toStrictEqual(1500)

  })
  test('works with keys', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).reduce((prev, value, key) => (prev + key), '')
    expect(r1).toStrictEqual('abcde')

    const r2 = Dictionary.from(object).reduce((prev, value, key) => (prev + key), '')
    expect(r2).toStrictEqual('abcde')

    const r3 = new Dictionary(object).reduce((prev, value, key) => (prev + key), '')
    expect(r3).toStrictEqual('abcde')

  })
})
