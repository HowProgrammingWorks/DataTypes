'use strict';

const countTypesInArray = arr => {
  const hash = { };
  for (const el of arr) {
    if (hash[typeof el] === undefined) {
      hash[typeof el] = 0;
    }
    hash[typeof el]++;
  }
  return hash;
};

module.exports = { countTypesInArray };
