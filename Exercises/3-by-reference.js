'use strict';
// prettier-ignore
const inc = function(num) {
  ++num.n;
};
const obj = { n: 5 };
inc(obj);
console.dir(obj);

module.exports = { inc };
