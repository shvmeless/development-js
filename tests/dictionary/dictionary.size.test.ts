// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.size()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).size()
    expect(r1).toBe(0)

    const r2 = Dictionary.from(object).size()
    expect(r2).toBe(0)

    const r3 = new Dictionary(object).size()
    expect(r3).toBe(0)

  })
  test('object is not empty', () => {

    const object = { a: 1, b: 2, c: 3 }

    const r1 = dictionary(object).size()
    expect(r1).toBe(3)

    const r2 = Dictionary.from(object).size()
    expect(r2).toBe(3)

    const r3 = new Dictionary(object).size()
    expect(r3).toBe(3)

  })
})
