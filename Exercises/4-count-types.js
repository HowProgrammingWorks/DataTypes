'use strict';

const countTypesInArray = (arr, hash = {}) => {
  arr.forEach(el => {
    const type = typeof el;
    if (Object.keys(hash).includes(type)) {
      ++hash[type];
    } else {
      hash[type] = 1;
    }
  });

  return hash;
};

module.exports = { countTypesInArray };
