'use strict';

const inc = function (obj) {
  obj.n++;
};


const obj = { n: 5 };
inc(obj);
console.log(obj);

module.exports = { inc };
