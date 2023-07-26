"use strict";

const countTypesInArray = (array) => {
  const types = {};
  for (const element of array) {
    const type = typeof element;
    const count = types[type] || 0;
    types[type] = count + 1;
  }
  return types;
};

module.exports = { countTypesInArray };
