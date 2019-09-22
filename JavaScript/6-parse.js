'use strict';

//console.log(parseInt('9', 8)); // 3
//console.log(parseInt('12', 16)); // 9
//console.log(parseInt('37', 36)); // 17

//console.log(parseInt(5, 16)); // 5
//console.log(parseInt('5', 8)); // 5
//console.log(parseInt(-5, 36)); // 5
//console.log(parseInt(5mm, 24)); // 5

//console.log(parseInt('(5em)', 36)); // NaN
//console.log(parseInt('"5em"', 36)); // NaN
//console.log(parseInt('[5em]', 36)); // NaN

//console.log(parseInt('Null', 10)); // NaN
//console.log(parseInt('-Null', 36)); // NaN
//console.log(parseInt('Infinity', 10)); // NaN
//console.log(parseInt('-Infinity', 10)); // NaN

//console.log(5.1,            parseInt(5.1, 20)); // 5.1 5
//console.log(5.1 * 1e50,     parseInt(5.1 * 1e50, 20)); // 5.1e+50 5
//console.log(0.000000000005, parseInt(0.000000000005, 20)); // 5e-12 5
//console.log(0.0000005,      parseInt(0.0000005, 20)); // 5e-7 5
//console.log(0.000005,       parseInt(0.000005, 20)); // 0.000005 0

// 255
//console.log(parseInt('fF', 17));
//console.log(parseInt('-0xff', 36));
//console.log(parseInt('0xFf', 16));
//console.log(parseInt('  0xFf   ', 16));

// NaN
//console.log(parseInt('ff', 16));
//console.log(parseInt('ff', 24));
//console.log(parseInt('ff', 36));
//console.log(parseInt('ff', 15));

//console.log(parseInt('ff', 16)); // 255
//console.log(parseInt('ff', 17)); // 270
//console.log(parseInt('ff', 20)); // 315
//console.log(parseInt('ff', 30)); // 465
//console.log(parseInt('ff', 31)); // 480
//console.log(parseInt('ff', 32)); // 495
//console.log(parseInt('ff', 33)); // 510
//console.log(parseInt('ff', 34)); // 525
//console.log(parseInt('ff', 35)); // 540
//console.log(parseInt('ff', 36)); // 555
//console.log(parseInt('ff', 37)); // NaN

// 3.14
//console.log(parseFloat(3.14));
//console.log(parseFloat('pi'));
//console.log(parseFloat('314e-2'));
//console.log(parseFloat('3.14text'));
//console.log(parseFloat('0.0314E+2'));

// 5
//console.log(parseFloat('5'));
//console.log(parseFloat('5.0'));
//console.log(parseFloat('5.0000000000000001'));

//console.log(parseFloat('5.1')); // 5.1
//console.log(parseFloat('5.000000000000001')); // 5.000000000000001

//console.log(parseFloat('100')); // 100
//console.log(parseFloat('-100')); // -100
//console.log(parseFloat('+100')); // 100

//console.log(parseFloat(5)); // 5
//console.log(parseFloat('5')); // 5
//console.log(parseFloat('+5')); // 5
//console.log(parseFloat('5mm')); // 5

//console.log(parseFloat('(5)')); // NaN
//console.log(parseFloat('"5"')); // NaN
//console.log(parseFloat('[5]')); // NaN

//console.log(parseFloat('NaN')); // NaN
//console.log(parseFloat('Infinity')); // Infinity
//console.log(parseFloat('-Infinity')); // -Infinity
