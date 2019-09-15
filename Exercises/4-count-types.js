'use strict';

const countTypesInArray = values => {
  const types = {};
  for (const value of values) {
    const type = typeof value;
    types[type] = ++types[type] || 1;
  }
  return types;
};

module.exports = { countTypesInArray };
