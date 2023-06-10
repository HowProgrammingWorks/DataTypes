'use strict';

const inc = (x) => ++x;

const a = 5;
const b = inc(a);
console.dir({ a, b });

module.exports = { inc };
