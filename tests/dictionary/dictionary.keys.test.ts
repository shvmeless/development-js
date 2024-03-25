// IMPORTS
import { dictionary } from '../../src/libs/dictionary-functions'
import { Dictionary } from '../../src/libs/dictionary'
import { describe, test, expect } from 'vitest'

// TESTS
describe('.keys()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).keys()
    expect(r1).toStrictEqual([])

    const r2 = Dictionary.from(object).keys()
    expect(r2).toStrictEqual([])

    const r3 = new Dictionary(object).keys()
    expect(r3).toStrictEqual([])

  })
  test('object is not empty', () => {

    const object = { a: 1, b: 2, c: 3 }

    const r1 = dictionary(object).keys()
    expect(r1).toStrictEqual(['a', 'b', 'c'])

    const r2 = Dictionary.from(object).keys()
    expect(r2).toStrictEqual(['a', 'b', 'c'])

    const r3 = new Dictionary(object).keys()
    expect(r3).toStrictEqual(['a', 'b', 'c'])

  })
})
