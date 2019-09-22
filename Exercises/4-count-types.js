'use strict';

const countTypesInArray = a => {
  const obj = {};
  for (const key of a) {
    const val = typeof key;
    val in obj ? obj[val] += 1 : obj[val] = 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
