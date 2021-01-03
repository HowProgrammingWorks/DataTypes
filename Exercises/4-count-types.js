'use strict';

const countTypesInArray = array => {
  const obj = {};
  for (const element of array) {
    const key = typeof element;
    obj[key] ? obj[key]++ : obj[key] = 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
