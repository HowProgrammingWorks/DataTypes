'use strict';

const countTypesInArray = arr => {
  const types = {};
  for (const a of arr) {
    const type = typeof(a);
    if (type in types) types[type]++;
    else types[type] = 1;
  }
  return types;
};

module.exports = { countTypesInArray };
