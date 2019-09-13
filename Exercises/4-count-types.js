'use strict';

const countTypesInArray = array => {
  const result = {};

  for (const elem of array) {
    hash[typeof elem] = (hash[typeof elem]) + 1 || 1;
  }

  return hash;
};

module.exports = { countTypesInArray };
