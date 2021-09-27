'use strict';

const countTypesInArray = (array) => {
  const table = {};
  for (const value of array) {
    const type = typeof value;
    const counter = table[type] || 0;
    table[type] = counter + 1;
  }
  return table;
};

module.exports = { countTypesInArray };
