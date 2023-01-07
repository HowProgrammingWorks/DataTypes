'use strict';

// node.js version 10.8.0
// V8 version 6.7.288.49-node.19

console.log('MAX_SAFE_INTEGER     =', Number.MAX_SAFE_INTEGER);
console.log('MAX_SAFE_INTEGER + 1 =', Number.MAX_SAFE_INTEGER + 1);
console.log('MAX_SAFE_INTEGER + 2 =', Number.MAX_SAFE_INTEGER + 2);
console.log();

const max = 2 ** 53 - 1;
const biSafe = BigInt(max);
console.log('max    =', max);
console.log('biSafe =', biSafe);
console.log();

console.log('typeof max    =', typeof max);
console.log('typeof biSafe =', typeof biSafe);
console.log('if (max === biSafe) :', max === biSafe);
console.log('if (max == biSafe) :', max == biSafe);
console.log();

console.log('biSafe      =', biSafe);
console.log('biSafe + 1n =', biSafe + 1n);
console.log('biSafe + 2n =', biSafe + 2n);
console.log();

console.log('15n / 3n =', 15n / 3n);
console.log('3n / 2n =', 3n / 2n);
console.log('BigInt(3n / 2n) =', BigInt(3n / 2n));

// console.log('BigInt(\'1.5\') =', BigInt('1.5'));
// SyntaxError: Cannot convert 1.5 to a BigInt

// console.log('BigInt(1.5) =', BigInt(1.5));
// RangeError: The number 1.5 cannot be converted
// to a BigInt because it is not an integer

console.log('2n > 1n =', 2n > 1n);
console.log('2n > 1 =', 2n > 1);
console.log();

console.log('(1000n ** 200n) / 12321n =', (1000n ** 200n) / 12321n);
console.log();

const array2 = [3, -2, 7n, -5n, -1n, 2, 5n, 0];
console.log(array2);
console.log(array2.sort());
console.log();

const array1 = [-2, 7, 1n, 3, -2n, 8n, 5, -4n];
console.log(array1);
console.log(array1.sort());
console.log(array1.sort((a, b) => Number(BigInt(a) - BigInt(b))));
console.log();

// https://github.com/tc39/proposal-bigint
