'use strict';

const countTypesInArray = arr => {
  const types = {};
  for (const i of arr) {
    if (!types[typeof i]) types[typeof i] = 0;
    types[typeof i]++;
  }
  return types;
};

module.exports = { countTypesInArray };
