'use strict';

const countTypesInArray = array => {
  const result = {};

  for (const elem of array) {
    const type = typeof elem;
    result[type] = (result[type]) + 1 || 1;
  }

  return result;
};

module.exports = { countTypesInArray };
