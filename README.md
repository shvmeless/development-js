# JavaScript Development Tools

Tools designed to enhance `JavaScript` and `TypeScript` development.

## Dictionary

This package offers two tools to improve dictionary management. A dictionary is defined as any `Record` containing an indeterminate number of properties where all the properties share the same types.

The tools include the `Dictionary` class and the `dictionary` module, each offering distinct approaches to handling dictionaries.

### Dictionary Class

The `Dictionary` class allows you to manage a dictionary by always working with the same object instance/reference. It is especially useful when managing a dictionary across multiple contexts or performing a series of operations on the same dictionary.

#### Usage

To create a new instance of the `Dictionary` class, pass an object to the constructor. This approach uses the provided object as a reference, so changes made via the `Dictionary` instance will affect the original object:

```typescript
import { Dictionary } from '@shvmeless/development'

const object: Record<string, number> = { a: 1, b: 2, c: 3 }
const dictionary = new Dictionary(object)

dictionary.map((value) => (value * 100))
dictionary.rename((value, key) => (key.toUpperCase()))

console.log(object) // { A: 100, B: 200, C: 300 }
console.log(dictionary.value()) // { A: 100, B: 200, C: 300 }

console.log(object === dictionary.value()) // true
```

If you want to avoid modifying the original object, you can use the static `from` method to create an independent dictionary instance:

```typescript
import { Dictionary } from '@shvmeless/development'

const object: Record<string, number> = { a: 1, b: 2, c: 3 }
const dictionary = Dictionary.from(object)

dictionary.map((value) => (value * 100))
dictionary.rename((value, key) => (key.toUpperCase()))

console.log(object) // { a: 1, b: 2, c: 3 }
console.log(dictionary.value()) // { A: 100, B: 200, C: 300 }

console.log(object === dictionary.value()) // false
```

### Dictionary Module

The `dictionary` module creates a new object every time an operation is performed on the dictionary. This approach ensures immutability by generating distinct results for each modification.

```typescript
const { dictionary } = require('@shvmeless/development')

const object = { a: 1, b: 2, c: 3 }

const result1 = dictionary(object).map((value) => (value * 100))
const result2 = dictionary(result1).rename((value, key) => (key.toUpperCase()))

console.log(object) // { a: 1, b: 2, c: 3 }
console.log(result1) // { a: 100, b: 200, c: 300 }
console.log(result2) // { A: 100, B: 200, C: 300 }

console.log(object === result1) // false
console.log(object === result2) // false
console.log(result1 === result2) // false
```

## Utilities

The following methods/functions are available in the `Dictionary` class and the `dictionary` module.

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
