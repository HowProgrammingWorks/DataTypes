'use strict';

const fn = x => {
  const arr1 = [1, 2, 3];
  const res = [];
  for (const i of arr1) {
    res.push(i * x);
  }
  return res;
};

module.exports = { fn };
