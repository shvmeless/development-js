// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.forEach()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1: Array<[string, number]> = []
    dictionary(object).forEach((value, key) => {
      r1.push([key, value])
    })
    expect(r1).toStrictEqual([])

    const r2: Array<[string, number]> = []
    Dictionary.from(object).forEach((value, key) => {
      r2.push([key, value])
    })
    expect(r2).toStrictEqual([])

    const r3: Array<[string, number]> = []
    new Dictionary(object).forEach((value, key) => {
      r3.push([key, value])
    })
    expect(r3).toStrictEqual([])

  })
  test('works with values and keys', () => {

    const object = { a: 1, b: 2, c: 3 }

    const r1: Array<[string, number]> = []
    dictionary(object).forEach((value, key) => {
      r1.push([key, value])
    })
    expect(r1).toStrictEqual([['a', 1], ['b', 2], ['c', 3]])

    const r2: Array<[string, number]> = []
    Dictionary.from(object).forEach((value, key) => {
      r2.push([key, value])
    })
    expect(r2).toStrictEqual([['a', 1], ['b', 2], ['c', 3]])

    const r3: Array<[string, number]> = []
    new Dictionary(object).forEach((value, key) => {
      r3.push([key, value])
    })
    expect(r3).toStrictEqual([['a', 1], ['b', 2], ['c', 3]])

  })
})
