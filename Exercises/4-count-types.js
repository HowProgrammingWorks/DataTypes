'use strict';

const countTypesInArray = arr => {
  const types = {};
  for (const el of arr) {
    const type = typeof el;
    types[type] = types[type] ? ++types[type] : 1;
  }
  return types;
};

module.exports = { countTypesInArray };
