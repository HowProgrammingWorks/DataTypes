'use strict';

const inc = n => ++n;
const a = 5;
const b = inc(a);
console.log(a, b);

module.exports = { inc };
