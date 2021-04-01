'use strict';

console.log(0b11); // 3
console.log(0o11); // 9
console.log(0x11); // 17

console.log(parseInt(5, 10)); // 5
console.log(parseInt('5', 10)); // 5
console.log(parseInt('+5', 10)); // 5
console.log(parseInt('5mm', 10)); // 5

console.log(parseInt('(5)', 10)); // NaN
console.log(parseInt('"5"', 10)); // NaN
console.log(parseInt('[5]', 10)); // NaN

console.log(parseInt('NaN', 10)); // NaN
console.log(parseInt(Infinity, 10)); // NaN
console.log(parseInt('Infinity', 10)); // NaN
console.log(parseInt('-Infinity', 10)); // NaN

console.log(5.1,            parseInt(5.1, 10)); // 5.1 5
console.log(5.1 * 1e50,     parseInt(5.1 * 1e50, 10)); // 5.1e+50 5
console.log(0.000000000005, parseInt(0.000000000005, 10)); // 5e-12 5
console.log(0.0000005,      parseInt(0.0000005, 10)); // 5e-7 5
console.log(0.000005,       parseInt(0.000005, 10)); // 0.000005 0

// 255
console.log(0xfF);
console.log(parseInt('0xff', 16));
console.log(parseInt('0xFf', 16));
console.log(parseInt('  0xFf   ', 16));

// NaN
console.log(parseInt('ff', 2));
console.log(parseInt('ff', 8));
console.log(parseInt('ff', 10));
console.log(parseInt('ff', 15));

console.log(0xff); // 255
console.log(parseInt('ff', 17)); // 270
console.log(parseInt('ff', 20)); // 315
console.log(parseInt('ff', 30)); // 465
console.log(parseInt('ff', 31)); // 480
console.log(parseInt('ff', 32)); // 495
console.log(parseInt('ff', 33)); // 510
console.log(parseInt('ff', 34)); // 525
console.log(parseInt('ff', 35)); // 540
console.log(parseInt('ff', 36)); // 555
console.log(parseInt('ff', 37)); // NaN

// 3.14
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('3.14text'));
console.log(parseFloat('0.0314E+2'));

// 5
console.log(parseFloat('5'));
console.log(parseFloat('5.0'));
console.log(parseFloat('5.0000000000000001'));

console.log(parseFloat('5.1')); // 5.1
console.log(parseFloat('5.000000000000001')); // 5.000000000000001

console.log(parseFloat('100')); // 100
console.log(parseFloat('-100')); // -100
console.log(parseFloat('+100')); // 100

console.log(parseFloat(5)); // 5
console.log(parseFloat('5')); // 5
console.log(parseFloat('+5')); // 5
console.log(parseFloat('5mm')); // 5

console.log(parseFloat('(5)')); // NaN
console.log(parseFloat('"5"')); // NaN
console.log(parseFloat('[5]')); // NaN

console.log(parseFloat('NaN')); // NaN
console.log(parseFloat('Infinity')); // Infinity
console.log(parseFloat('-Infinity')); // -Infinity
