'use strict';

const inc = function(obj) {
  obj.n += 1;
};
const obj = { n: 9 };
inc(obj);
console.dir(obj);

module.exports = { inc };
