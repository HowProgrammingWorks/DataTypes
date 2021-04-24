'use strict';

const countTypesInArray = arr => {
  const types = {};
  for (const i of arr) {
    const t = typeof i;
    const el = types[t];
    if (el)
      types[t]++;
    else
      types[t] = 1;
  }
  return types;
};

module.exports = { countTypesInArray };
