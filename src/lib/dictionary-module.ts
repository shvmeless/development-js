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

  }
}
