import { entries } from './record'

/**
 * Iterates over each property of the given object.
 * @param object The object to iterate over.
 * @param callback The function to call for each property.
*/
export function forEach <K extends string, V> (object: Record<K, V>, callback: (value: V, key: K) => void): void {
  for (const [key, value] of entries(object)) {
    callback(value, key)
  }
}

/**
 * Returns a copy of the given object with only the properties that pass the validation function.
 * @param object The object to filter.
 * @param callback The function that validates each property.
 * @returns A copy of the given object with only the properties that pass the validation function.
*/
export function filter <K extends string, V> (object: Record<K, V>, callback: (value: V, key: K) => boolean): Record<K, V> {
  const result: Record<string, V> = {}
  for (const [key, value] of entries(object)) {
    const condition = callback(value, key)
    if (condition) result[key] = value
  }
  return result as Record<K, V>
}

/**
 * Maps each property of the given object.
 * If the callback returns undefined, the property will be omitted.
 * @param object The object to map.
 * @param callback The function to call for each property.
 * @returns A copy of the given object with the mapped properties.
*/
export function map <K extends string, V, N> (object: Record<K, V>, callback: (value: V, key: K) => N | undefined): Record<K, N> {
  const result: Record<string, N> = {}
  for (const [key, value] of entries(object)) {
    const item = callback(value, key)
    if (item === undefined) continue
    result[key] = item
  }
  return result as Record<K, N>
}
