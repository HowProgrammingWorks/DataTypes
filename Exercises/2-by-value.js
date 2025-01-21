'use strict';

const inc = (n) => n + 1;

const a = 5;
const b = inc(a);

console.log({ a, b });

module.exports = { inc };
