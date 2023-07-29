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

/**
 * Maps each property of the given object.
 * If the callback returns undefined, the property will be omitted.
 * @param object The object to map.
 * @param callback The function to call for each property.
 * @returns A copy of the given object with the mapped properties.
*/
export async function map <K extends string, V, N> (object: Record<K, V>, callback: (value: V, key: K) => Promise<N | undefined>): Promise<Record<K, N>> {
  const result: Record<string, N> = {}
  for (const [key, value] of entries(object)) {
    const item = await callback(value, key)
    if (item === undefined) continue
    result[key] = item
  }
  return result as Record<K, N>
}

/**
 * Checks if at lest one property of the given object passes the validation function.
 * @param object The object to check.
 * @param callback The function that validates each property.
 * @returns True if all the properties pass the validation function, false otherwise.
*/
export async function some <K extends string, V> (object: Record<K, V>, callback: (value: V, key: K) => Promise<boolean>): Promise<boolean> {
  for (const [key, value] of entries(object)) {
    const result = await callback(value, key)
    if (result) return true
  }
  return false
}

/**
 * Checks if all the properties of the given object pass the validation function.
 * @param object The object to check.
 * @param callback The function that validates each property.
 * @returns True if all the properties pass the validation function, false otherwise.
*/
export async function everyAsync <K extends string, V> (object: Record<K, V>, callback: (value: V, key: K) => Promise<boolean>): Promise<boolean> {
  for (const [key, value] of entries(object)) {
    const result = await callback(value, key)
    if (!result) return false
  }
  return true
}

/**
 * Reduces all the properties of the given object into a single value.
 * @param object The object to reduce.
 * @param callback The function to call for each property.
 * @param initialValue The initial value of the accumulator.
 * @returns The accumulated value.
*/
export async function reduceAsync <K extends string, V, N> (object: Record<K, V>, callback: (previous: N, current: V, key: K) => Promise<N>, initialValue: N): Promise<N> {
  let accumulator = initialValue
  for (const [key, value] of entries(object)) {
    accumulator = await callback(accumulator, value, key)
  }
  return accumulator
}

/**
 * Converts the given object into an array.
 * Different from Object.values() because it allows you to map the values.
 * @param object The object to convert.
 * @param callback The function to call for each property.
 * @returns An array with the mapped values.
*/
export async function arrayAsync <K extends string, V, N> (object: Record<K, V>, callback: (value: V, key: K) => Promise<N>): Promise<N[]> {
  const result: N[] = []
  for (const [key, value] of entries(object)) {
    const item = await callback(value, key)
    if (item === undefined) continue
    result.push(item)
  }
  return result
}
