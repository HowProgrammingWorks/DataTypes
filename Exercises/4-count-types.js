'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const item of array) {
    const type = typeof item;
    types[type] = types[type] || 0;
    types[type]++;
  }
  return types;
};

module.exports = { countTypesInArray };
