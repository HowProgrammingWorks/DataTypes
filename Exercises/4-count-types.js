'use strict';

const countTypesInArray = arr => {
  const result = {};
  for (const value of arr) {
    const key = typeof value;
    if (result[key]) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  }
  return result;
};

module.exports = { countTypesInArray };
