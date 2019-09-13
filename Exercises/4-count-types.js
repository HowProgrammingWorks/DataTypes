'use strict';

const countTypesInArray = array => {
  const hash = {};
  for (const value of array) {
    const type = typeof value;
    hash[type] ? hash[type]++ : hash[type] = 1;
  }
  return hash;
};
module.exports = { countTypesInArray };
