'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const el of array) {
    const type = typeof(el);
    types[type] = types[type] || 0;
    types[type]++;
  }

  return types;
};

module.exports = { countTypesInArray };
