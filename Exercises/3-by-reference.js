'use strict';

const inc = num => {
  if (typeof num === 'object') ++num.n;
};
const obj = { n: 5 };
inc(obj);
console.dir(obj);

module.exports = { inc };
