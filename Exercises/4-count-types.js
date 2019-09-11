'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const o of array) {
    if (typeof(o) in types) {
      types[typeof(o)]++;
    } else {
      types[typeof(o)] = 1;
    }
  }

  return types;
};

module.exports = { countTypesInArray };
