'use strict';

const countTypesInArray = array => {
  const typeNames = {};

  for (const type of array) {
    const typeValue = typeof type;
    typeNames[typeValue] = (typeNames[typeValue]) + 1 || 1;
  }

  return typeNames;
};

module.exports = { countTypesInArray };
