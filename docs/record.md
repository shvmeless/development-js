# record

The main purpose of this module is to provide a set of functions to work with objects in a more functional way (similar to how you would work with arrays).

> These functions are mainly intended to be used on **record** objects, but they can also be used on objects with a **known** set of **properties**. The typing **(generics)** of the functions can work differently depending on the case.

> [Go back to the main page ?](../README.md)

## index
- [entries](#entries) - Extracts the `key` and `value` of all properties of an `object`.
- [keys](#keys) - Extracts the `key` of all properties of an `object`.
- [values](#values) - Extracts the `value` of all properties of an `object`.
- [has](#has) - Checks if an `object` has all the given `keys`.
- [pick](#pick) - Picks the given `keys` from an `object`.
- [omit](#omit) - Omits the given `keys` from an `object`.
- [merge](#merge) - Merges the given `objects` into a single `object`.
- [forEach](#forEach) - Calls the given `function` for each property of an `object`.
- [filter](#filter) - Filters the properties of an `object` using the given `function`.
- [map](#map) - Maps the properties of an `object` using the given `function`.
- [some](#some) - Checks if any property of an `object` satisfies the given `function`.
- [every](#every) - Checks if all properties of an `object` satisfy the given `function`.
- [reduce](#reduce) - Reduces all properties of an `object` using the given `function`.
- [array](#array) - Reduces all properties of an `object` using the given `function`.

## entries
Extracts the `key` and `value` of all properties of an `object`.
- **@param** `object` The object to get the entries of.
- **@returns** The entries of the given object.
```typescript
record.entries({ a: 1, b: 2, c: 3 })
// [['a', 1], ['b', 2], ['c', 3]]
```

## keys
Extracts the `key` of all properties of an `object`.
- **@param** `object` The object to get the keys of.
- **@returns** The keys of the given object.
```typescript
record.keys({ a: 1, b: 2, c: 3 })
// ['a', 'b', 'c']
```

## values
Extracts the `value` of all properties of an `object`.
- **@param** `object` The object to get the values of.
- **@returns** The values of the given object.
```typescript
record.values({ a: 1, b: 2, c: 3 })
// [1, 2, 3]
```

## has
Checks if an `object` has all the given `keys`.
- **@param** `object` The object to check.
- **@param** `props` The properties to check for.
```typescript
record.has({ a: 1, b: 2, c: 3 }, 'a', 'b')
// true
record.has({ a: 1, b: 2, c: 3 }, 'a', 'd')
// false
```

## pick
Picks the given `keys` from an `object`.
- **@param** `object` The object to pick the properties from.
- **@param** `props` The properties to pick.
- **@returns** A copy of the given object with only the specified properties.
```typescript
record.pick({ a: 1, b: 2, c: 3 }, 'a', 'b')
// { a: 1, b: 2 }
record.pick({ a: 1, b: 2, c: 3 }, 'a', 'd')
// { a: 1 }
```

## omit
Omits the given `keys` from an `object`.
- **@param** `object` The object to omit the properties from.
- **@param** `props` The properties to omit.
- **@returns** A copy of the given object without the specified properties.
```typescript
record.omit({ a: 1, b: 2, c: 3 }, 'a', 'b')
// { c: 3 }
record.omit({ a: 1, b: 2, c: 3 }, 'a', 'd')
// { b: 2, c: 3 }
```

## merge
Merges the given `objects` into a single `object`.
- **@param** `object1` The first object to merge.
- **@param** `object2` The second object to merge.
- **@returns** A new object with the properties of both objects.
```typescript
record.merge({ a: 1, b: 2 }, { c: 3, d: 4 })
// { a: 1, b: 2, c: 3, d: 4 }
record.merge({ a: 1, b: 2 }, { b: 3, c: 4 })
// { a: 1, b: 3, c: 4 }
```

## forEach
Calls the given `function` for each property of an `object`.
- **@param** `object` The object to iterate over.
- **@param** `callback` The function to call for each property.
```typescript
record.forEach({ a: 1, b: 2, c: 3 }, (value, key) => {
  console.log(key, value)
})
// a 1
// b 2
// c 3
```
> This function has an `async` version in `record.async.forEach`.

## filter
Filters the properties of an `object` using the given `function`.
- **@param** `object` The object to filter.
- **@param** `callback` The function that validates each property.
- **@returns** A copy of the given object with only the properties that pass the validation function.
```typescript
record.filter({ a: 1, b: 2, c: 3 }, (value, key) => {
  return value % 2 === 0
})
// { b: 2 }
```
> This function has an `async` version in `record.async.filter`.

## map
Maps the properties of an `object` using the given `function`.
If the callback returns undefined, the property will be omitted.
- **@param** `object` The object to map.
- **@param** `callback` The function to call for each property.
- **@returns** A copy of the given object with the mapped properties.
```typescript
record.map({ a: 1, b: 2, c: 3 }, (value, key) => {
  return key.repeat(value)
})
// { a: 'a', b: 'bb', c: 'ccc' }
```
> This function has an `async` version in `record.async.map`.

## some
Checks if any property of an `object` satisfies the given `function`.
- **@param** `object` The object to check.
- **@param** `callback` The function that validates each property.
- **@returns** True if all the properties pass the validation function, false otherwise.
```typescript
record.some({ a: 1, b: 2, c: 3 }, (value, key) => {
  return value % 2 === 0
})
// true
record.some({ a: 1, b: 2, c: 3 }, (value, key) => {
  return value > 3
})
// false
```
> This function has an `async` version in `record.async.some`.

## every
Checks if all properties of an `object` satisfy the given `function`.
- **@param** `object` The object to check.
- **@param** `callback` The function that validates each property.
- **@returns** True if all the properties pass the validation function, false otherwise.
```typescript
record.every({ a: 1, b: 2, c: 3 }, (value, key) => {
  return value % 2 === 0
})
// false
record.every({ a: 1, b: 2, c: 3 }, (value, key) => {
  return value > 0
})
// true
```
> This function has an `async` version in `record.async.every`.

## reduce
Reduces all properties of an `object` using the given `function`.
- **@param** `object` The object to reduce.
- **@param** `callback` The function to call for each property.
- **@param** `initialValue` The initial value of the accumulator.
- **@returns** The accumulated value.
```typescript
record.reduce({ a: 1, b: 2, c: 3 }, (accumulator, value, key) => {
  return accumulator + value
}, 0)
// 6
```
> This function has an `async` version in `record.async.reduce`.

## array
Maps the properties of an `object` to an `array` using the given `function`.
- **@param** `object` The object to convert.
- **@param** `callback` The function to call for each property.
- **@returns** An array with the mapped values.
```typescript
record.array({ a: 1, b: 2, c: 3 }, (value, key) => {
  return key.repeat(value)
})
// ['a', 'bb', 'ccc']
```
> This function has an `async` version in `record.async.array`.

## async
This namespace contains the async versions of some `record` functions.
```typescript
record.async.map({ a: 1, b: 2, c: 3 }, async (value, key) => {
  return key.repeat(value)
})
// { a: 'a', b: 'bb', c: 'ccc' }
```
