'use strict';

const countTypesInArray = arr => {
  const res = {};
  for (const el of arr) {
    const type = typeof el;
    res[type] = res[type] ? ++res[type] : 1;
  }
  return res;
};

module.exports = { countTypesInArray };
