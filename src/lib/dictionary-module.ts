// IMPORTS
import type { DictionaryModule } from './dictionary-interfaces'

// MODULE
export function dictionary<V> (object: Record<string, V>): DictionaryModule<V> {
  return {

    /**
     * Returns an array of keys from the object.
    */
    keys (): Array<string> {
      return Object.keys(object)
    },

    /**
     * Returns an array of values from the object.
    */
    values (): Array<V> {
      return Object.values(object)
    },

    /**
     * Returns an array of key-value pairs from the object.
    */
    entries (): Array<[string, V]> {
      return Object.entries(object)
    },

    /**
     * Returns the number of properties in the object.
    */
    size (): number {
      return Object.keys(object).length
    },

    /**
     * Returns the value associated with the specified key.
    */
    at (key: string): V | undefined {
      return object[key]
    },

    /**
     * Creates a copy of the object and modify the provided property.
    */
    set (key: string, value: V): Record<string, V> {
      const copy = { ...object }
      copy[key] = value
      return copy
    },

    /**
     * Checks if all specified keys are present in the object.
    */
    has (...search: Array<string>): boolean {
      if (search.length === 0) return false
      for (const key of search) {
        const item = object[key]
        if (item !== undefined) continue
        return false
      }
      return true
    },

    /**
     * Checks if at least one of the specified keys is present in the object.
    */
    hasOneOf (...search: Array<string>): boolean {
      if (search.length === 0) return false
      for (const key of search) {
        const item = object[key]
        if (item === undefined) continue
        return true
      }
      return false
    },

    /**
     * Checks if all specified values are present in the object.
    */
    includes (...search: Array<V>): boolean {
      if (search.length === 0) return false
      for (const value of dictionary(object).values()) {
        const index = search.indexOf(value)
        if (index < 0) continue
        search.splice(index, 1)
      }
      return (search.length === 0)
    },

    /**
     * Checks if at least one of the specified values is present in the object.
    */
    includesOneOf (...search: Array<V>): boolean {
      if (search.length === 0) return false
      for (const value of dictionary(object).values()) {
        if (!search.includes(value)) continue
        return true
      }
      return false
    },

    /**
     * Returns a random value from the object.
    */
    random (): V | undefined {
      const values = dictionary(object).values()
      const index = Math.floor(Math.random() * values.length)
      return values[index]
    },

    /**
     * Creates a map by counting the number of times that the values provided appear in the object.
    */
    times (...search: Array<V>): Map<V, number> {
      const count = new Map<V, number>()
      for (const value of dictionary(object).values()) {
        if (search.length > 0 && !search.includes(value)) continue
        const current = count.get(value) ?? 0
        count.set(value, current + 1)
      }
      return count
    },

    /**
     * Creates a new empty object.
    */
    clear (): Record<string, V> {
      return {}
    },

    /**
     * Creates a copy of the object.
    */
    copy (): Record<string, V> {
      const copy: Record<string, V> = {}
      for (const [key, value] of dictionary(object).entries()) {
        copy[key] = value
      }
      return copy
    },

    /**
     * Creates a copy of the object and merges it with all the provided objects, rewriting repeated properties.
    */
    merge <V2>(...targets: Array<Record<string, V2>>): Record<string, V | V2> {
      const result: Record<string, V | V2> = dictionary(object).copy()
      for (const target of targets) {
        for (const [key, value] of dictionary(target).entries()) {
          result[key] = value
        }
      }
      return result
    },

    /**
     * Creates a copy of the object, including only the provided properties.
    */
    pick <K2 extends string>(...keys: Array<K2>): Partial<Record<K2, V>> {
      const result: Partial<Record<K2, V>> = {}
      for (const key of keys) {
        if (object[key] === undefined) continue
        result[key] = object[key]
      }
      return result
    },

    /**
     * Creates a copy of the object, excluding the provided properties.
    */
    delete (...keys: Array<string>): Record<string, V> {
      object = { ...object }
      for (const key of keys) {
        delete object[key]
      }
      return object
    },

    /**
     * Executes the provided callback function once for each property in the object.
    */
    forEach (callback: (value: V, key: string, object: Record<string, V>) => void): void {
      for (const [key, value] of dictionary(object).entries()) {
        callback(value, key, object)
      }
    },

    /**
     * Checks if at least one property in the object satisfies the provided condition.
    */
    some (callback: (value: V, key: string, object: Record<string, V>) => boolean): boolean {
      for (const [key, value] of dictionary(object).entries()) {
        const condition = callback(value, key, object)
        if (!condition) continue
        return true
      }
      return false
    },

    /**
     * Checks if all properties in the object satisfies the provided condition.
    */
    every (callback: (value: V, key: string, object: Record<string, V>) => boolean): boolean {
      for (const [key, value] of dictionary(object).entries()) {
        const condition = callback(value, key, object)
        if (condition) continue
        return false
      }
      return true
    },

    /**
     * Finds the first property in the object that satisfies the provided condition.
    */
    find (callback: (value: V, key: string, object: Record<string, V>) => boolean): [string, V] | undefined {
      for (const [key, value] of dictionary(object).entries()) {
        const condition = callback(value, key, object)
        if (!condition) continue
        return [key, value]
      }
      return undefined
    },

    /**
     * Creates a new object that includes only the properties that satisfies the provided condition.
    */
    filter (callback: (value: V, key: string, object: Record<string, V>) => boolean): Record<string, V> {
      const result: Record<string, V> = {}
      for (const [key, value] of dictionary(object).entries()) {
        const condition = callback(value, key, object)
        if (!condition) continue
        result[key] = value
      }
      return result
    },

    /**
     * Creates a new object, renaming the original properties based on the provided callback function.
    */
    rename (callback: (value: V, key: string, object: Record<string, V>) => (string | undefined)): Record<string, V> {
      const result: Record<string, V> = {}
      for (const [key, value] of dictionary(object).entries()) {
        const name = callback(value, key, object)
        if (name === undefined) continue
        result[name] = value
      }
      return result
    },

    /**
     * Creates a new object, transforming the original values based on the provided callback function.
    */
    map <V2> (callback: (value: V, key: string, object: Record<string, V>) => (V2 | undefined)): Record<string, V2> {
      const result: Record<string, V2> = {}
      for (const [key, value] of dictionary(object).entries()) {
        const item = callback(value, key, object)
        if (item === undefined) continue
        result[key] = item
      }
      return result
    },

    /**
     * Creates a new object, renaming and transforming the original properties based on the provided callback function.
    */
    remake <V2> (callback: (value: V, key: string, object: Record<string, V>) => ([string, V2] | undefined)): Record<string, V2> {
      const result: Record<string, V2> = {}
      for (const [key, value] of dictionary(object).entries()) {
        const [newKey, newValue] = callback(value, key, object) ?? [undefined, undefined]
        if (newKey === undefined || newValue === undefined) continue
        result[newKey] = newValue
      }
      return result
    },

    /**
     * Creates an array of values based on a provided callback function.
    */
    array <V2> (callback: (value: V, key: string, object: Record<string, V>) => (V2 | undefined)): Array<V2> {
      const result: Array<V2> = []
      for (const [key, value] of dictionary(object).entries()) {
        const item = callback(value, key, object)
        if (item === undefined) continue
        result.push(item)
      }
      return result
    },

    /**
     * Counts the number of properties in the object that satisfies a provided condition.
    */
    count (callback: (value: V, key: string, object: Record<string, V>) => boolean): number {
      let count = 0
      for (const [key, value] of dictionary(object).entries()) {
        const condition = callback(value, key, object)
        if (!condition) continue
        count++
      }
      return count
    },

    /**
     * Reduces the object to a single value based on a provided callback function.
    */
    reduce <N>(callback: (prev: N, value: V, key: string, object: Record<string, V>) => N, initial: N): N {
      let result = initial
      for (const [key, value] of dictionary(object).entries()) {
        result = callback(result, value, key, object)
      }
      return result
    },

  }
}
