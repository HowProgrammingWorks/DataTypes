'use strict';

const countTypesInArray = arr => {
  const obj = {};
  for (const element of arr) {
    const key = typeof element;
    obj[key] ? obj[key]++ : obj[key] = 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
