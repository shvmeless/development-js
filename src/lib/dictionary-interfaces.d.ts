// INTERFACE
export interface DictionaryMethods<V> {
  value: Record<string, V>
  keys: () => Array<string>
  values: () => Array<V>
  entries: () => Array<[string, V]>
  size: () => number
  at: (key: string) => V | undefined
  set: (key: string, value: V) => this
  has: (...search: Array<string>) => boolean
  hasOneOf: (...search: Array<string>) => boolean
  includes: (...search: Array<V>) => boolean
  includesOneOf: (...search: Array<V>) => boolean
  random: () => V | undefined
  times: (...search: Array<V>) => Map<V, number>
  clear: () => this
  copy: () => DictionaryMethods<V>
  merge: (...targets: Array<Record<string, V>>) => this
  pick: (...keys: Array<string>) => this
  delete: (...keys: Array<string>) => this
}

// INTERFACE
export interface DictionaryModule<V> {
  keys: () => Array<string>
  values: () => Array<V>
  entries: () => Array<[string, V]>
  size: () => number
  at: (key: string) => V | undefined
  set: (key: string, value: V) => Record<string, V>
  has: (...search: Array<string>) => boolean
  hasOneOf: (...search: Array<string>) => boolean
  includes: (...search: Array<V>) => boolean
  includesOneOf: (...search: Array<V>) => boolean
  random: () => V | undefined
  times: (...search: Array<V>) => Map<V, number>
  clear: () => Record<string, V>
  copy: () => Record<string, V>
  merge: <V2>(...targets: Array<Record<string, V2>>) => Record<string, V | V2>
  pick: <K2 extends string>(...keys: Array<K2>) => Partial<Record<K2, V>>
  delete: (...keys: Array<string>) => Record<string, V>
}
