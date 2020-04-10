'use strict';

const inc = obj => {
  obj.n += 1;
};

const obj = {
  n: 1
};

inc(obj);

console.log(obj);

module.exports = { inc };
