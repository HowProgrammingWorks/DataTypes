'use strict';

const countTypesInArray = array => {
  const result = {};
  for (const item of array) {
    const type = typeof item;
    if (!result[type]) {
      result[type] = 0;
    }
    result[type]++;
  }
  return result;
};

module.exports = { countTypesInArray };
