'use strict';

const countTypesInArray = (arr, hash = {}) => {
  for (const el of arr) {
    const type = typeof el;
    (hash[type]) ?
      ++hash[type] :
      hash[type] = 1;
  }

  return hash;
};

module.exports = { countTypesInArray };
