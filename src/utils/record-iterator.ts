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
