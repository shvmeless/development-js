/**
 * Returns the key and value of each property of the given object.
 * @param object The object to get the entries of.
 * @returns The entries of the given object.
*/
export function entries <K extends string, V> (object: Record<K, V>): [K, V][] {
  return Object.entries(object) as [K, V][]
}

/**
 * Returns the keys of the given object.
 * @param object The object to get the keys of.
 * @returns The keys of the given object.
*/
export function keys <K extends string> (object: Record<K, unknown>): K[] {
  return Object.keys(object) as K[]
}

/**
 * Returns the values of the given object.
 * @param object The object to get the values of.
 * @returns The values of the given object.
*/
export function values <V> (object: Record<string, V>): V[] {
  return Object.values(object)
}

/**
 * Checks if the given object has all the given properties.
 * @param object The object to check.
 * @param props The properties to check for.
 * @returns True if the object has all the given properties, false otherwise.
*/
export function has <K extends string> (object: Record<K, unknown>, ...props: K[]): boolean {
  for (const prop of props) {
    if (!keys(object).includes(prop)) return false
  }
  return true
}

/**
 * Picks the specified properties from the given object.
 * @param object The object to pick the properties from.
 * @param props The properties to pick.
 * @returns A copy of the given object with only the specified properties.
*/
export function pick <K1 extends string, V, K2 extends K1> (object: Record<K1, V>, ...props: K2[]): Record<K2, V> {
  const result: Partial<Record<K2, V>> = {}
  for (const prop of props) {
    if (!keys(object).includes(prop)) continue
    const value = object[prop]
    result[prop] = value
  }
  return result as Record<K2, V>
}
