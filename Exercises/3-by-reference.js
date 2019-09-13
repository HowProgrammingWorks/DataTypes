'use strict';

const a = { n: 5 };
const inc = num => {
  ++num.n;
};
inc(a);
console.log(a);
module.exports = { inc };
