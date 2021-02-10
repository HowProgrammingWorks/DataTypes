'use strict';

const inc = num => ++num;

const a = 5;
const b = inc(a);
console.dir({ a, b });

module.exports = { inc };
