'use strict';

const inc = function (obj) {
  obj.n++;
};

const obj = { n: 5 };
inc(obj);
console.dir(obj);
module.exports = { inc };
