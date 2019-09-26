'use strict';

const inc = object => {
  object.n++;
};

const obj = { n: 5 };

inc(obj);

console.dir(obj);

module.exports = { inc };
