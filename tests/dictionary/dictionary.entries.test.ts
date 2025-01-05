// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.entries()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).entries()
    expect(r1).toStrictEqual([])

    const r2 = Dictionary.from(object).entries()
    expect(r2).toStrictEqual([])

    const r3 = new Dictionary(object).entries()
    expect(r3).toStrictEqual([])

  })
  test('object is not empty', () => {

    const object = { a: 1, b: 2, c: 3 }

    const r1 = dictionary(object).entries()
    expect(r1).toStrictEqual([['a', 1], ['b', 2], ['c', 3]])

    const r2 = Dictionary.from(object).entries()
    expect(r2).toStrictEqual([['a', 1], ['b', 2], ['c', 3]])

    const r3 = new Dictionary(object).entries()
    expect(r3).toStrictEqual([['a', 1], ['b', 2], ['c', 3]])

  })
})
