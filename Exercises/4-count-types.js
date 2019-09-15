'use strict';

const countTypesInArray = array => {
  const hash = {};
  for (const item of array) {
    const type = typeof item;
    let counter = hash[type] || 0;
    counter++;
    hash[type] = counter;
  }
  return hash;
};

module.exports = { countTypesInArray };
