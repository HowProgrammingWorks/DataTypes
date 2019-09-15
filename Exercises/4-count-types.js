'use strict';

const countTypesInArray = array => {
  const result = {};
  for (const item of array) {
    const type = typeof item;
    result[type] = result[type] ? ++result[type] : 1;
  }
  return result;
};

module.exports = { countTypesInArray };
