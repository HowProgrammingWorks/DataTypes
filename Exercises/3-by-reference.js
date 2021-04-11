'use strict';

const obj = { n: 10 };
const inc = obj => {
  obj.n++;
};

inc(obj);

module.exports = { inc };
