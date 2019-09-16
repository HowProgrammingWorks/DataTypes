'use strict';

const countTypesInArray = arr => {
  const hash = {};
  for (const o of arr) {
    const type = typeof o;
    hash[type] = ++hash[type] || 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
