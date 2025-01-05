// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.random()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).random()
    expect(r1).toBeUndefined()

    const r2 = Dictionary.from(object).random()
    expect(r2).toBeUndefined()

    const r3 = new Dictionary(object).random()
    expect(r3).toBeUndefined()

  })
  test('object is not empty', () => {

    const object = { a: 1, b: 2, c: 3 }

    const r1 = dictionary(object).random()
    expect(r1).toBeGreaterThanOrEqual(1)
    expect(r1).toBeLessThanOrEqual(3)

    const r2 = Dictionary.from(object).random()
    expect(r2).toBeGreaterThanOrEqual(1)
    expect(r2).toBeLessThanOrEqual(3)

    const r3 = new Dictionary(object).random()
    expect(r3).toBeGreaterThanOrEqual(1)
    expect(r3).toBeLessThanOrEqual(3)

  })
})
