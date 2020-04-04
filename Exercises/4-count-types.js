'use strict';

const countTypesInArray = arr => {
  const hash = {};
  for (const el of arr) {
    hash[typeof el] = isNaN(hash[typeof el]) ? 1 : ++hash[typeof el];
  }
  return hash;
};

module.exports = { countTypesInArray };
