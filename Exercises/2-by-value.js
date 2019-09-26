'use strict';

const inc = number => ++number;
const a = 5;
const b = inc(a);
console.log({ a, b });




module.exports = { inc };
