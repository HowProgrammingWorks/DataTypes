# Exercises

## Hoisting

1. Implement function containing local variable with hoisting.

- Commit example to github.
- Use eslint to find this problem and --fix flag to remove it.
- Fix example manually and commit it to github.

## Scalar value vs Reference

Prepare two implementations of `inc` function:

2. First with signature `inc(n: number): number`,
call example: `const a = 5; const b = inc(a); console.dir({ a, b });`
3. Second with signature `inc(num: Num)` where `Num` is object with field `n`,
so function will change field of the object passed by reference,
call example: `const obj = { n: 5 }; inc(obj); console.dir(obj);`

## Types

4. Prepare array with values of different type.
5. Prepare collection (object) with type names as keys and `0` as values,
example: `{ number: 0, string: 0 }` and so on for all types.
6. Iterate array with `for..of` loop and increment occurrence counter there
to get collection of types occurrences count for all types in array.
7. Modify this example: remove all keys from initial collection literal and
add all keys dynamically from the loop.
