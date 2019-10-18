'use strict';

const countTypesInArray = arr => {
  const types = {};
  for (const i of arr) {
    const key = typeof i;
    types[key] ? ++types[key] : types[key] = 1;
  }
  return types;
};

module.exports = { countTypesInArray };
