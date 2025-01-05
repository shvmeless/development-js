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
  forEach: (callback: (value: V, key: string, object: Record<string, V>) => void) => void
  some: (callback: (value: V, key: string, object: Record<string, V>) => boolean) => boolean
  every: (callback: (value: V, key: string, object: Record<string, V>) => boolean) => boolean
  find: (callback: (value: V, key: string, object: Record<string, V>) => boolean) => [string, V] | undefined
  filter: (callback: (value: V, key: string, object: Record<string, V>) => boolean) => this
  rename: (callback: (value: V, key: string, object: Record<string, V>) => (string | undefined)) => this
  map: <V2>(callback: (value: V, key: string, object: Record<string, V>) => (V2 | undefined)) => DictionaryMethods<V2>
  remake: <V2>(callback: (value: V, key: string, object: Record<string, V>) => ([string, V2] | undefined)) => DictionaryMethods<V2>
  array: <V2>(callback: (value: V, key: string, object: Record<string, V>) => (V2 | undefined)) => Array<V2>
  count: (callback: (value: V, key: string, object: Record<string, V>) => boolean) => number
  reduce: <N>(callback: (prev: N, value: V, key: string, object: Record<string, V>) => N, initial: N) => N
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
  forEach: (callback: (value: V, key: string, object: Record<string, V>) => void) => void
  some: (callback: (value: V, key: string, object: Record<string, V>) => boolean) => boolean
  every: (callback: (value: V, key: string, object: Record<string, V>) => boolean) => boolean
  find: (callback: (value: V, key: string, object: Record<string, V>) => boolean) => [string, V] | undefined
  filter: (callback: (value: V, key: string, object: Record<string, V>) => boolean) => Record<string, V>
  rename: (callback: (value: V, key: string, object: Record<string, V>) => (string | undefined)) => Record<string, V>
  map: <V2> (callback: (value: V, key: string, object: Record<string, V>) => (V2 | undefined)) => Record<string, V2>
  remake: <V2> (callback: (value: V, key: string, object: Record<string, V>) => ([string, V2] | undefined)) => Record<string, V2>
  array: <V2> (callback: (value: V, key: string, object: Record<string, V>) => (V2 | undefined)) => Array<V2>
  count: (callback: (value: V, key: string, object: Record<string, V>) => boolean) => number
  reduce: <N>(callback: (prev: N, value: V, key: string, object: Record<string, V>) => N, initial: N) => N
}
