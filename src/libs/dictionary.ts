// CLASS
export class Dictionary <V> {

  // PROPERTIES
  private readonly object: Record<string, V>

  // CONSTRUCTOR
  constructor (object: Record<string, V>) {
    this.object = object
  }

  // STATIC
  public static from <V> (object: Record<string, V>): Dictionary<V> {
    return new Dictionary({ ...object })
  }

  // GETTER
  public value (): Record<string, V> {
    return this.object
  }

  /**
   * Returns an array of keys from the object.
  */
  public keys (): Array<string> {
    return Object.keys(this.object)
  }

  /**
   * Returns an array of values from the object.
  */
  public values (): Array<V> {
    return Object.values(this.object)
  }

  /**
   * Returns an array of key-value pairs from the object.
  */
  public entries (): Array<[string, V]> {
    return Object.entries(this.object)
  }

  /**
   * Returns the number of properties in the object.
  */
  public size (): number {
    return Object.keys(this.object).length
  }

  /**
   * Returns the value associated with the specified key.
  */
  public at (key: string): V | undefined {
    return this.object[key]
  }

  /**
   * Modifies the value of the provided property.
  */
  public set (key: string, value: V): this {
    this.object[key] = value
    return this
  }

  /**
   * Checks if all specified keys are present in the object.
  */
  public has (...search: Array<string>): boolean {
    if (search.length === 0) return false
    for (const key of search) {
      const item = this.object[key]
      if (item === undefined) return false
    }
    return true
  }

  /**
   * Checks if at least one of the specified keys is present in the object.
  */
  public hasOneOf (...search: Array<string>): boolean {
    if (search.length === 0) return false
    for (const key of search) {
      const item = this.object[key]
      if (item !== undefined) return true
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
      if (index >= 0) search.splice(index, 1)
    }
    return (search.length === 0)
  }

  /**
   * Checks if at least one of the specified values is present in the object.
  */
  public includesOneOf (...search: Array<V>): boolean {
    if (search.length === 0) return false
    for (const value of this.values()) {
      if (search.includes(value)) return true
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
      delete this.object[key]
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
        this.object[key] = value
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
      delete this.object[key]
    }
    return this
  }

  /**
   * Removes the provided properties.
  */
  public delete (...keys: Array<string>): this {
    for (const key of keys) {
      delete this.object[key]
    }
    return this
  }

}
