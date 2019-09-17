'use strict';

const countTypesInArray = array => {
  const result = {};
  for (const item of array) {
    const type = typeof item;
    const count = result[type];
    result[type] = count ?
      count + 1 : 1;
  }
  return result;
};

module.exports = { countTypesInArray };
