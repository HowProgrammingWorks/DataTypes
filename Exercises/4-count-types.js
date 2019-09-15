'use strict';

const countTypesInArray = values => {
  const types = {};
  for (const value of values) {
    (value === null) ? types[null] = ++types[null] || 1 :
      types[typeof value] = ++types[typeof value] || 1;
  }
  return types;
};

module.exports = { countTypesInArray };
