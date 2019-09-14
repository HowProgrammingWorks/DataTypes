'use strict';

const countTypesInArray = arr => {
  const hesh = {};

  for (const value of arr) {
    const t = typeof value;
    if (hesh[t] === undefined) {
      hesh[t] = 1;
    } else {
      ++hesh[t];
    }
  }
  return hesh;
};

module.exports = { countTypesInArray };
