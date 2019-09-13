'use strict';

const countTypesInArray = arr => {
  const types = {};
  for (const el of arr) {
    const t = el === null ? 'null' : typeof el;
    if (!(t in types)) {
      types[t] = 0;
    }
    types[t] += 1;
  }
  return types;
};

module.exports = { countTypesInArray };
