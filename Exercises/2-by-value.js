'use strict';
const inc = (f) => f = ++f;
const a = 5;
const b = inc(a);
console.dir({ a, b });
module.exports = { inc };
