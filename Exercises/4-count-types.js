'use strict';

const countTypesInArray = array => {
  const obj = {};
  for (const value of array) {
    if (typeof(value) in obj) {
      ++obj[typeof(value)];
    } else {
      obj[typeof(value)] = 1;
    }
  }
  return obj;
};

module.exports = { countTypesInArray };
