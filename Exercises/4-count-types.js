'use strict';

const countTypesInArray = arr => {
  const hash = {};
  for (const item of arr) {
    const typeValue = typeof item;
    if (typeValue in hash) {
      ++hash[typeValue];
    } else hash[typeValue] = 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
