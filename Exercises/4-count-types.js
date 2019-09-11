'use strict';

const countTypesInArray = array => {
  const hash = {};
  for (const item of array)
    isNaN(hash[typeof item]) ?
      hash[typeof item] = 1 :
      hash[typeof item]++;
  return hash;
};

module.exports = { countTypesInArray };
