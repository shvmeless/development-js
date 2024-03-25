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

}
