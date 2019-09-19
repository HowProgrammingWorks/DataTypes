'use strict';

const countTypesInArray = arr => {
  const result = {};
  for (const item of arr) {
    const type = typeof item;
    if (!result[type]) result[type] = 0;
    result[type]++;
  }
  return result;
};

module.exports = { countTypesInArray };
