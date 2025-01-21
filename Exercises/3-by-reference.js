'use strict';

const obj = { n: 5 };

const inc = (obj) => {
  obj.n++;
};

inc(obj);

console.dir(obj);

module.exports = { inc };
