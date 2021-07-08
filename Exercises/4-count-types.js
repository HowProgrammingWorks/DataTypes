'use strict';

const countTypesInArray = array => {
  const obj = {};
  for (const element of array) {
    obj[typeof element] = 0;
  }
  for (const element of array) {
    obj[typeof element]++;
  }
  return obj;
};

module.exports = { countTypesInArray };
