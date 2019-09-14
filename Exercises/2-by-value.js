'use strict';

const inc = a => ++a;
const a = 5;
const b = inc(a);
console.dir({ a, b });
module.exports = { inc };
