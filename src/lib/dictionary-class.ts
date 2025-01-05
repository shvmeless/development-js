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

}
