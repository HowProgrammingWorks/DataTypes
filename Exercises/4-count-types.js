'use strict';

const countTypesInArray = (array) => {
  const hash = {};
  for (const object of array) {
    const type = typeof object;
    !hash[type] ?
      hash[type] = 1 :
      hash[type]++;
  }
  return hash;
};

module.exports = { countTypesInArray };
