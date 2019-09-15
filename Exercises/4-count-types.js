'use strict';

const countTypesInArray = arr => {
  const types = {};

  for (const item of arr) {
    const typeOfItem = typeof item;
    types[typeOfItem] ?
      types[typeOfItem] += 1 :
      types[typeOfItem] = 1;
  }

  return types;
};

module.exports = { countTypesInArray };
