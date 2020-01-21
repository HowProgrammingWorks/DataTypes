'use strict';

const countTypesInArray = arr => {
  const result = {};
  for (const element of arr) {
    const type = typeof(element);
    const count = result[type] || 0;
    result[type] = count + 1;
  }
  return result;
};

module.exports = { countTypesInArray };
