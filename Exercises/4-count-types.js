'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const item of array) {
    const type = typeof item;
    types[type] = ++types[type] || 1;
  }
  return types;
};

module.exports = { countTypesInArray };
