// IMPORTS
import { describe, test, expect } from 'vitest'
import { Dictionary, dictionary } from '../../src'

// TESTS
describe('.every()', () => {
  test('object is empty', () => {

    const object: Record<string, number> = {}

    const r1 = dictionary(object).every((value) => (value % 2 === 0))
    expect(r1).toBe(true)

    const r2 = dictionary(object).every((value) => (value === 0))
    expect(r2).toBe(true)

    const r3 = Dictionary.from(object).every((value) => (value % 2 === 0))
    expect(r3).toBe(true)

    const r4 = Dictionary.from(object).every((value) => (value === 0))
    expect(r4).toBe(true)

    const r5 = new Dictionary(object).every((value) => (value % 2 === 0))
    expect(r5).toBe(true)

    const r6 = new Dictionary(object).every((value) => (value === 0))
    expect(r6).toBe(true)

  })
  test('works with values', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).every((value) => (value % 2 === 0))
    expect(r1).toBe(false)

    const r2 = dictionary(object).every((value) => (value > 0))
    expect(r2).toBe(true)

    const r3 = Dictionary.from(object).every((value) => (value % 2 === 0))
    expect(r3).toBe(false)

    const r4 = Dictionary.from(object).every((value) => (value > 0))
    expect(r4).toBe(true)

    const r5 = new Dictionary(object).every((value) => (value % 2 === 0))
    expect(r5).toBe(false)

    const r6 = new Dictionary(object).every((value) => (value > 0))
    expect(r6).toBe(true)

  })
  test('works with keys', () => {

    const object = { a: 1, b: 2, c: 3, d: 4, e: 5 }

    const r1 = dictionary(object).every((value, key) => (/^[a-e]+$/.test(key)))
    expect(r1).toBe(true)

    const r2 = dictionary(object).every((value, key) => (/^[0-9]+$/.test(key)))
    expect(r2).toBe(false)

    const r3 = Dictionary.from(object).every((value, key) => (/^[a-e]+$/.test(key)))
    expect(r3).toBe(true)

    const r4 = Dictionary.from(object).every((value, key) => (/^[0-9]+$/.test(key)))
    expect(r4).toBe(false)

    const r5 = new Dictionary(object).every((value, key) => (/^[a-e]+$/.test(key)))
    expect(r5).toBe(true)

    const r6 = new Dictionary(object).every((value, key) => (/^[0-9]+$/.test(key)))
    expect(r6).toBe(false)

  })
})
