'use strict';

const inc = obj => obj.n++;
const obj = { n: 5 };
inc(obj);
console.log(obj);

module.exports = { inc };
