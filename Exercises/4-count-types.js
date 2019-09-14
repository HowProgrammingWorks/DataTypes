'use strict';

const countTypesInArray = arr => {
  const types = {};

  for (const i of arr) {
    const itemType = typeof i;
    types[itemType] = (itemType in types) ? (types[itemType] + 1) : 1;
  }

  return types;
};

module.exports = { countTypesInArray };
