'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const item of array) {
    const type = typeof item;
    const counter = types[type] || 0;
    types[type] = counter + 1;
  }
  return types;
};

module.exports = { countTypesInArray };
