'use strict';

const inc = num => {
  num.n += 1;
};

const obj = { n: 5 };
inc(obj);
console.dir(obj);

module.exports = { inc };
