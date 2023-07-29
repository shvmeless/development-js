/**
 * Returns the key and value of each property of the given object.
 * @param object The object to get the entries of.
 * @returns The entries of the given object.
*/
export function entries <K extends string, V> (object: Record<K, V>): [K, V][] {
  return Object.entries(object) as [K, V][]
}
