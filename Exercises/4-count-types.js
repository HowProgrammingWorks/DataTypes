'use strict';

const countTypesInArray = (array) => {
  const table = {};
  for (const value of array) {
    const type = typeof value;
    type in table ? ++table[type] : table[type] = 1;
  }
  return table;
};

module.exports = { countTypesInArray };
