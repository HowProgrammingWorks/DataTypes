'use strict';

const countTypesInArray = arr => {
  const hash = {};
  for (const elem of arr) {
    const type = typeof elem;
    const value = hash[type] || 0;
    hash[type] = value + 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
