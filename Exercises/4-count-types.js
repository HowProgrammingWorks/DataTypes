'use strict';

const countTypesInArray = arr => {
  const dict = {};
  for (const value of arr) {
    if (typeof value in dict) {
      dict[typeof value] += 1;
    } else {
      dict[typeof value] = 1;
    }
  }
  return dict;
};

module.exports = { countTypesInArray };
