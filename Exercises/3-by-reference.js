'use strict';

const inc = obj => {
  obj.n++;
};

const obj = { n: 5 };
inc(obj);
console.dir(obj);

module.exports = { inc };
