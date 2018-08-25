'use strict';

const a = 9;
const b = 14;
const c = -9;

const aBinary = a.toString(2);
const bBinary = b.toString(2);
const cBinary = c.toString(2);

console.log(a + ' to base 2:  ' + aBinary); // 9 to base 2: 1001
console.log(b + ' to base 2: ' + bBinary); // 14 to base 2: 1110

console.log('Bitwise operators'); // Bitwise operators

console.log(a + ' & ' + b + ' = ' + (a & b)); // 9 & 14 = 8
console.log(aBinary + ' & ' + bBinary + ' = ' + (a & b).toString(2)); // 1001 & 1110 = 1000

console.log(a + ' | ' + b, ' = ', (a | b)); // 9 | 14 = 15
console.log(aBinary + ' | ' + bBinary + ' = ' + (a | b).toString(2)); // 1001 | 1110 = 1111

console.log(a + ' ^ ' + b, ' = ', (a ^ b)); // 9 ^ 14 = 7
console.log(aBinary + ' ^ ' + bBinary + ' = ' + (a ^ b).toString(2)); //1001 ^ 1110 = 111

console.log('~' + a + ' = ' + ~a); // ~9 = -10
console.log('~' + aBinary + ' = ' + (~a).toString(2)); // ~1001 = -1010

console.log(a + ' << ' + 2 + ' = ', a << 2); // 9 << 2 = 36
console.log(aBinary + ' << ' + 2 + ' = ' + (a << 2).toString(2)); // 1001 << 2 = 100100

console.log(b + ' >> ' + 2 + ' = ', b >> 2); // 14 >> 2 = 3
console.log(b + ' >>> ' + 2 + ' = ', b >>> 2); // 14 >>> 2 = 3
console.log(bBinary + ' >> ' + 2 + ' = ' + (b >> 2).toString(2)); // 1110 >> 2 = 11
console.log(bBinary + ' >>> ' + 2 + ' = ' + (b >>> 2).toString(2)); // 1110 >>> 2 = 11

console.log(c + ' >> ' + 2 + ' = ', c >> 2); // -9 >> 2 = -3
console.log(c + ' >>> ' + 2 + ' = ', c >>> 2); // -9 >>> 2 = 1073741821
console.log(cBinary + ' >> ' + 2 + ' = ' + (c >> 2).toString(2)); // -1001 >> 2 = -11
console.log(cBinary + ' >>> ' + 2 + ' = ' + (c >>> 2).toString(2)); // -1001 >>> 3 = 11111111111111111111111111101
