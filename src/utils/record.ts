/**
 * Extracts the `key` and `value` of all properties of an `object`.
 * @param object The object to get the entries of.
 * @returns The entries of the given object.
*/
export function entries <K extends string, V> (object: Record<K, V>): [K, V][] {
  return Object.entries(object) as [K, V][]
}

/**
 * Extracts the `key` of all properties of an `object`.
 * @param object The object to get the keys of.
 * @returns The keys of the given object.
*/
export function keys <K extends string> (object: Record<K, unknown>): K[] {
  return Object.keys(object) as K[]
}

/**
 * Extracts the `value` of all properties of an `object`.
 * @param object The object to get the values of.
 * @returns The values of the given object.
*/
export function values <V> (object: Record<string, V>): V[] {
  return Object.values(object)
}

/**
 * Checks if an `object` has all the given `keys`.
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
 * Picks the given `keys` from an `object`.
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

/**
 * Omits the given `keys` from an `object`.
 * @param object The object to omit the properties from.
 * @param props The properties to omit.
 * @returns A copy of the given object without the specified properties.
*/
export function omit <K1 extends string, V, K2 extends K1> (object: Record<K1, V>, ...props: K2[]): Record<Exclude<K1, K2>, V> {
  const result: Partial<Record<Exclude<K1, K2>, V>> = {}
  for (const [key, value] of entries(object)) {
    if (props.includes(key as K2)) continue
    result[key as Exclude<K1, K2>] = value
  }
  return result as Record<Exclude<K1, K2>, V>
}

/**
 * Merges the given `objects` into a single `object`.
 * @param object1 The first object to merge.
 * @param object2 The second object to merge.
 * @returns A new object with the properties of both objects.
*/
export function merge <K1 extends string, V1, K2 extends string, V2 > (object1: Record<K1, V1>, object2: Record<K2, V2>): Record<K1 | K2, V1 | V2> {
  const result: Partial<Record<K1 | K2, V1 | V2>> = {}
  for (const [key, value] of entries(object1)) {
    result[key] = value
  }
  for (const [key, value] of entries(object2)) {
    result[key] = value
  }
  return result as Record<K1 | K2, V1 | V2>
}
