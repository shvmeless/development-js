// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.array()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).array((value) => value * 100)
    expect(r1).toStrictEqual([])

    const r2 = Dictionary.from(object).array((value) => (value * 100))
    expect(r2).toStrictEqual([])

    const r3 = new Dictionary(object).array((value) => (value * 100))
    expect(r3).toStrictEqual([])

  })
  test('works with values', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).array((value) => ((value % 2 === 0) ? (value * 100) : undefined))
    expect(r1).toStrictEqual([200, 400])

    const r2 = Dictionary.from(object).array((value) => ((value % 2 === 0) ? (value * 100) : undefined))
    expect(r2).toStrictEqual([200, 400])

    const r3 = new Dictionary(object).array((value) => ((value % 2 === 0) ? (value * 100) : undefined))
    expect(r3).toStrictEqual([200, 400])

  })
  test('works with keys', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).array((value, key) => ((value % 2 === 0) ? key.toUpperCase() : undefined))
    expect(r1).toStrictEqual(['B', 'D'])

    const r2 = Dictionary.from(object).array((value, key) => ((value % 2 === 0) ? key.toUpperCase() : undefined))
    expect(r2).toStrictEqual(['B', 'D'])

    const r3 = new Dictionary(object).array((value, key) => ((value % 2 === 0) ? key.toUpperCase() : undefined))
    expect(r3).toStrictEqual(['B', 'D'])

  })
})
