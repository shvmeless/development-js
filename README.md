# Development Tools

This package provides a set of tools to improve the development in  `javascript` and `typescript`.

## Dictionary

This feature provides a set of tools for working with objects in a way similar to working with arrays.

In `typescript`, this feature uses generic types to remember the type of object values, but not to remember the keys, assuming the keys are just of type `string`, so the objects will be handled internally as `Record<string, T>`.

There are two different ways to use this feature. The first is through the `dictionary()` function, and the other is by using an instance of the `Dictionary` class.

### `dictionary()`

Provides a set of functions that perform various operations and transformations on the object without directly modifying it, eliminating the need to create a copy of the object or destructure it when passing it as an argument.

Functions that performs modifications will return a new object instead.

```ts
const { dictionary } = require('@shvmerc/development')

const object = { a: 1, b: 2, c: 3 }

const result1 = dictionary(object).map((value) => (value * 100))
console.log(result1) // { a: 100, b: 200, c: 300 }

const result2 = dictionary(result1).rename((value, key) => (key.toUpperCase()))
console.log(result2) // { A: 100, B: 200, C: 300 }

console.log(object) // { a: 1, b: 2, c: 3 }
console.log(object === result1) // false
console.log(object === result2) // false
```

### `new Dictionary()`

Creates an instance of the `Dictionary` class linked to the provided object. The methods of this class allow various operations and transformations on the original object.

Methods that perform modifications will return `this` instead of returning the object directly, requiring the use of the `.value()` method to get the actual object.

```ts
const { Dictionary } = require('@shvmerc/development')

const object = { a: 1, b: 2, c: 3 }

const dictionary = new Dictionary(object)

dictionary.map((value) => (value * 100))
console.log(dictionary.value()) // { a: 100, b: 200, c: 300 }

dictionary.rename((value, key) => (key.toUpperCase()))
console.log(dictionary.value()) // { A: 100, B: 200, C: 300 }

console.log(object) // { A: 100, B: 200, C: 300 }
console.log(object === dictionary.value()) // true
```

### Methods

| method / function  | description                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------|
| `.keys()`          | Returns an array of keys from the object.                                                    |
| `.values()`        | Returns an array of values from the object.                                                  |
| `.entries()`       | Returns an array of key-value pairs from the object.                                         |
| `.size()`          | Returns the number of properties in the object.                                              |
| `.at()`            | Returns the value associated with the specified key.                                         |
| `.set()`           | Modifies the value of the provided property.                                                 |
| `.has()`           | Checks if all specified keys are present in the object.                                      |
| `.hasOneOf()`      | Checks if at least one of the specified keys is present in the object.                       |
| `.includes()`      | Checks if all specified values are present in the object.                                    |
| `.includesOneOf()` | Checks if at least one of the specified values is present in the object.                     |
| `.random()`        | Returns a random value from the object.                                                      |
| `.times()`         | Creates a map by counting the number of times that the values provided appear in the object. |
| `.clear()`         | Removes all the properties.                                                                  |
| `.copy()`          | Creates a copy of the object.                                                                |
| `.merge()`         | Merges the object with all the provided objects, rewriting repeated properties.              |
| `.pick()`          | Removes all, except the provided properties.                                                 |
| `.delete()`        | Removes the provided properties.                                                             |
| `.forEach()`       | Executes the provided callback function once for each property in the object.                |
| `.some()`          | Checks if at least one property in the object satisfies the provided condition.              |
| `.every()`         | Checks if all properties in the object satisfies the provided condition.                     |
| `.find()`          | Finds the first property in the object that satisfies the provided condition.                |
| `.filter()`        | Removes the properties that not satisfies the provided condition.                            |
| `.rename()`        | Rename the properties based on the provided callback function.                               |
| `.map()`           | Transform the property values based on the provided callback function.                       |
| `.remake()`        | Rename and transform the properties based on the provided callback function.                 |
| `.array()`         | Creates an array of values based on a provided callback function.                            |
| `.count()`         | Counts the number of properties in the object that satisfies a provided condition.           |
| `.reduce()`        | Reduces the object to a single value based on a provided callback function.                  |
