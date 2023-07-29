import { entries } from './record'

/**
 * Iterates over each property of the given object.
 * @param object The object to iterate over.
 * @param callback The function to call for each property.
*/
export async function forEach <K extends string, V> (object: Record<K, V>, callback: (value: V, key: K) => Promise<void>): Promise<void> {
  for (const [key, value] of entries(object)) {
    await callback(value, key)
  }
}

/**
 * Returns a copy of the given object with only the properties that pass the validation function.
 * @param object The object to filter.
 * @param callback The function that validates each property.
 * @returns A copy of the given object with only the properties that pass the validation function.
*/
export async function filter <K extends string, V> (object: Record<K, V>, callback: (value: V, key: K) => Promise<boolean>): Promise<Record<K, V>> {
  const result: Record<string, V> = {}
  for (const [key, value] of entries(object)) {
    const condition = await callback(value, key)
    if (condition) result[key] = value
  }
  return result as Record<K, V>
}
