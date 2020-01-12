'use strict';

const countTypesInArray = arr => {
  const hash = {};
  for (const elem of arr) {
    const type = typeof elem;
    hash[type] = !hash[type] ? 1 : hash[type] + 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
