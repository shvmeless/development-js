import { entries } from './record'

/**
 * Calls the given `function` for each property of an `object`.
 * @param object The object to iterate over.
 * @param callback The function to call for each property.
*/
export function forEach <K extends string, V> (object: Record<K, V>, callback: (value: V, key: K) => void): void {
  for (const [key, value] of entries(object)) {
    callback(value, key)
  }
}

/**
 * Filters the properties of an `object` using the given `function`.
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
 * Maps the properties of an `object` using the given `function`.
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

/**
 * Checks if any property of an `object` satisfies the given `function`.
 * @param object The object to check.
 * @param callback The function that validates each property.
 * @returns True if all the properties pass the validation function, false otherwise.
*/
export function some <K extends string, V> (object: Record<K, V>, callback: (value: V, key: K) => boolean): boolean {
  for (const [key, value] of entries(object)) {
    const result = callback(value, key)
    if (result) return true
  }
  return false
}

/**
 * Checks if all properties of an `object` satisfy the given `function`.
 * @param object The object to check.
 * @param callback The function that validates each property.
 * @returns True if all the properties pass the validation function, false otherwise.
*/
export function every <K extends string, V> (object: Record<K, V>, callback: (value: V, key: K) => boolean): boolean {
  for (const [key, value] of entries(object)) {
    const result = callback(value, key)
    if (!result) return false
  }
  return true
}

/**
 * Reduces all properties of an `object` using the given `function`.
 * @param object The object to reduce.
 * @param callback The function to call for each property.
 * @param initialValue The initial value of the accumulator.
 * @returns The accumulated value.
*/
export function reduce <K extends string, V, N> (object: Record<K, V>, callback: (previous: N, current: V, key: K) => N, initialValue: N): N {
  let accumulator = initialValue
  for (const [key, value] of entries(object)) {
    accumulator = callback(accumulator, value, key)
  }
  return accumulator
}

/**
 * Maps the properties of an `object` to an `array` using the given `function`.
 * @param object The object to convert.
 * @param callback The function to call for each property.
 * @returns An array with the mapped values.
*/
export function array <K extends string, V, N> (object: Record<K, V>, callback: (value: V, key: K) => N): N[] {
  const result: N[] = []
  for (const [key, value] of entries(object)) {
    const item = callback(value, key)
    if (item === undefined) continue
    result.push(item)
  }
  return result
}
