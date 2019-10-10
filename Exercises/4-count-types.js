'use strict';

const countTypesInArray = array => {
  const hash = {};
  for (const element of array) {
    const elementType = typeof element;
    hash[elementType] = hash[elementType] ? ++hash[elementType] : 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
