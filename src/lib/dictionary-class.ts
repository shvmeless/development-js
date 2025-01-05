// IMPORTS
import type { DictionaryMethods } from './dictionary-interfaces'

// CLASS
export class Dictionary<V> implements DictionaryMethods<V> {

  // PROPERTIES
  public readonly value: Record<string, V>

  /**
   * Creates an instance of Dictionary, referencing the provided object.
  */
  constructor (object: Record<string, V>) {
    this.value = object
  }

  /**
   * Creates an instance of Dictionary, using a shallow copy of the provided object.
  */
  public static from <V> (object: Record<string, V>): Dictionary<V> {
    return new Dictionary({ ...object })
  }

  /**
   * Returns an array of keys from the object.
  */
  public keys (): Array<string> {
    return Object.keys(this.value)
  }

  /**
   * Returns an array of values from the object.
  */
  public values (): Array<V> {
    return Object.values(this.value)
  }

  /**
   * Returns an array of key-value pairs from the object.
  */
  public entries (): Array<[string, V]> {
    return Object.entries(this.value)
  }

  /**
   * Returns the number of properties in the object.
  */
  public size (): number {
    return Object.keys(this.value).length
  }

  /**
   * Returns the value associated with the specified key.
  */
  public at (key: string): V | undefined {
    return this.value[key]
  }

  /**
   * Modifies the value of the provided property.
  */
  public set (key: string, value: V): this {
    this.value[key] = value
    return this
  }

  /**
   * Checks if all specified keys are present in the object.
  */
  public has (...search: Array<string>): boolean {
    if (search.length === 0) return false
    for (const key of search) {
      const item = this.value[key]
      if (item !== undefined) continue
      return false
    }
    return true
  }

  /**
   * Checks if at least one of the specified keys is present in the object.
  */
  public hasOneOf (...search: Array<string>): boolean {
    if (search.length === 0) return false
    for (const key of search) {
      const item = this.value[key]
      if (item === undefined) continue
      return true
    }
    return false
  }

  /**
   * Checks if all specified values are present in the object.
  */
  public includes (...search: Array<V>): boolean {
    if (search.length === 0) return false
    for (const value of this.values()) {
      const index = search.indexOf(value)
      if (index < 0) continue
      search.splice(index, 1)
    }
    return (search.length === 0)
  }

  /**
   * Checks if at least one of the specified values is present in the object.
  */
  public includesOneOf (...search: Array<V>): boolean {
    if (search.length === 0) return false
    for (const value of this.values()) {
      if (!search.includes(value)) continue
      return true
    }
    return false
  }

  /**
   * Returns a random value from the object.
  */
  public random (): V | undefined {
    const values = this.values()
    const index = Math.floor(Math.random() * values.length)
    return values[index]
  }

  /**
   * Creates a map by counting the number of times that the values provided appear in the object.
  */
  public times (...search: Array<V>): Map<V, number> {
    const count = new Map<V, number>()
    for (const value of this.values()) {
      if (search.length > 0 && !search.includes(value)) continue
      const current = count.get(value) ?? 0
      count.set(value, current + 1)
    }
    return count
  }

  /**
   * Removes all the properties.
  */
  public clear (): this {
    for (const key of this.keys()) {
      delete this.value[key]
    }
    return this
  }

  /**
   * Creates a copy of the object.
  */
  public copy (): Dictionary<V> {
    const copy: Record<string, V> = {}
    for (const [key, value] of this.entries()) {
      copy[key] = value
    }
    return new Dictionary(copy)
  }

  /**
   * Merges the object with all the provided objects, rewriting repeated properties.
  */
  public merge (...targets: Array<Record<string, V>>): this {
    for (const target of targets) {
      for (const [key, value] of new Dictionary(target).entries()) {
        this.value[key] = value
      }
    }
    return this
  }

  /**
   * Removes all, except the provided properties.
  */
  public pick (...keys: Array<string>): this {
    for (const [key] of this.entries()) {
      if (keys.includes(key)) continue
      delete this.value[key]
    }
    return this
  }

  /**
   * Removes the provided properties.
  */
  public delete (...keys: Array<string>): this {
    for (const key of keys) {
      delete this.value[key]
    }
    return this
  }

  /**
   * Executes the provided callback function once for each property in the object.
  */
  public forEach (callback: (value: V, key: string, object: Record<string, V>) => void): void {
    for (const [key, value] of this.entries()) {
      callback(value, key, this.value)
    }
  }

  /**
   * Checks if at least one property in the object satisfies the provided condition.
  */
  public some (callback: (value: V, key: string, object: Record<string, V>) => boolean): boolean {
    for (const [key, value] of this.entries()) {
      const condition = callback(value, key, this.value)
      if (!condition) continue
      return true
    }
    return false
  }

  /**
   * Checks if all properties in the object satisfies the provided condition.
  */
  public every (callback: (value: V, key: string, object: Record<string, V>) => boolean): boolean {
    for (const [key, value] of this.entries()) {
      const condition = callback(value, key, this.value)
      if (condition) continue
      return false
    }
    return true
  }

  /**
   * Finds the first property in the object that satisfies the provided condition.
  */
  public find (callback: (value: V, key: string, object: Record<string, V>) => boolean): ([string, V] | undefined) {
    for (const [key, value] of this.entries()) {
      const condition = callback(value, key, this.value)
      if (!condition) continue
      return [key, value]
    }
    return undefined
  }

  /**
   * Removes the properties that not satisfies the provided condition.
  */
  public filter (callback: (value: V, key: string, object: Record<string, V>) => boolean): this {
    for (const [key, value] of this.entries()) {
      const condition = callback(value, key, this.value)
      if (condition) continue
      delete this.value[key]
    }
    return this
  }

  /**
   * Rename the properties based on the provided callback function.
  */
  public rename (callback: (value: V, key: string, object: Record<string, V>) => (string | undefined)): this {
    for (const [key, value] of this.entries()) {
      const name = callback(value, key, this.value)
      delete this.value[key]
      if (name === undefined) continue
      this.value[name] = value
    }
    return this
  }

  /**
   * Transform the property values based on the provided callback function.
  */
  public map <V2> (callback: (value: V, key: string, object: Record<string, V>) => (V2 | undefined)): Dictionary<V2> {
    const result: Record<string, V2> = {}
    for (const [key, value] of this.entries()) {
      const item = callback(value, key, this.value)
      if (item === undefined) continue
      result[key] = item
    }
    return new Dictionary(result)
  }

  /**
   * Rename and transform the properties based on the provided callback function.
  */
  public remake <V2> (callback: (value: V, key: string, object: Record<string, V>) => ([string, V2] | undefined)): Dictionary<V2> {
    const result: Record<string, V2> = {}
    for (const [key, value] of this.entries()) {
      const [newKey, newValue] = callback(value, key, this.value) ?? [undefined, undefined]
      if (newKey === undefined || newValue === undefined) continue
      result[newKey] = newValue
    }
    return new Dictionary(result)
  }

  /**
   * Creates an array of values based on a provided callback function.
  */
  public array <V2> (callback: (value: V, key: string, object: Record<string, V>) => (V2 | undefined)): Array<V2> {
    const result: Array<V2> = []
    for (const [key, value] of this.entries()) {
      const item = callback(value, key, this.value)
      if (item === undefined) continue
      result.push(item)
    }
    return result
  }

  /**
   * Counts the number of properties in the object that satisfies a provided condition.
  */
  public count (callback: (value: V, key: string, object: Record<string, V>) => boolean): number {
    let count = 0
    for (const [key, value] of this.entries()) {
      const condition = callback(value, key, this.value)
      if (!condition) continue
      count++
    }
    return count
  }

  /**
   * Reduces the object to a single value based on a provided callback function.
  */
  public reduce <N>(callback: (prev: N, value: V, key: string, object: Record<string, V>) => N, initial: N): N {
    let result = initial
    for (const [key, value] of this.entries()) {
      result = callback(result, value, key, this.value)
    }
    return result
  }

}
