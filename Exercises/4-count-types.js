'use strict';

const countTypesInArray = array => {
  const hash = {};

  for (const elem of array) {
    hash[typeof elem] = (hash[typeof elem]) + 1 || 1;
  }

  return hash;
};

module.exports = { countTypesInArray };
