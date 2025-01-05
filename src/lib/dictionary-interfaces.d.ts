// INTERFACE
export interface DictionaryMethods<V> {
  value: Record<string, V>
  keys: () => Array<string>
  values: () => Array<V>
  entries: () => Array<[string, V]>
  size: () => number
  at: (key: string) => V | undefined
  set: (key: string, value: V) => this
}

// INTERFACE
export interface DictionaryModule<V> {
  keys: () => Array<string>
  values: () => Array<V>
  entries: () => Array<[string, V]>
  size: () => number
  at: (key: string) => V | undefined
  set: (key: string, value: V) => Record<string, V>
}
