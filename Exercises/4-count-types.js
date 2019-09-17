'use strict';

const countTypesInArray = array => {
  const obj = {};
  for (const value of array) {
    const type = typeof value;
    obj[type] = obj[type] || 0;
    obj[type]++;
  }
  return obj;
};

module.exports = { countTypesInArray };
