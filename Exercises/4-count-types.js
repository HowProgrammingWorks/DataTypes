'use strict';

const countTypesInArray = array => {
  const hash = {};
  for (const item of array) {
    hash[typeof item] = isNaN(hash[typeof item]) ? 1 : hash[typeof item] + 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
