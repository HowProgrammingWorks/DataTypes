'use strict';

const countTypesInArray = array => {
  const types = {};
  for (const el of array) {
    const type = typeof(el);
    if (type in types) {
      types[type]++;
    } else {
      types[type] = 1;
    }
  }

  return types;
};

module.exports = { countTypesInArray };
