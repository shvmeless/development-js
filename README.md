# development-js

A set of utilities to improve TypeScript development.<br>
This library is intended to be used mainly with **TypeScript**.<br>

> Currently in **development**, the **API** is **not stable** and can change at any time.<br>
> Its **not recommended** to use this package in production.<br>
> **Use at your own risk!**<br>

## record
> Go to [record](docs/record.md) documentation.
- `entries` - Extracts the `key` and `value` of all properties of an `object`.
- `keys` - Extracts the `key` of all properties of an `object`.
- `values` - Extracts the `value` of all properties of an `object`.
- `has` - Checks if an `object` has all the given `keys`.
- `pick` - Picks the given `keys` from an `object`.
- `omit` - Omits the given `keys` from an `object`.
- `merge` - Merges the given `objects` into a single `object`.
- `forEach` - Calls the given `function` for each property of an `object`.
- `filter` - Filters the properties of an `object` using the given `function`.
- `map` - Maps the properties of an `object` using the given `function`.
- `some` - Checks if any property of an `object` satisfies the given `function`.
- `every` - Checks if all properties of an `object` satisfy the given `function`.
- `reduce` - Reduces all properties of an `object` using the given `function`.
- `array` - Reduces all properties of an `object` using the given `function`.
