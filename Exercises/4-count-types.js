'use strict';

const countTypesInArray = array => {
  const result = {};
  for (const el of array) {
    const typeEl = typeof el;
    typeEl in result ? result[typeEl]++ : result[typeEl] = 1;
  }
  return result;
};

module.exports = { countTypesInArray };
