'use strict';

const countTypesInArray = array => {
  const hash = {};
  for (const value of array) {
    const type = typeof value;
    const counter = hash[type] || 0;
    hash[type] = counter + 1;
  }
  return hash;
};
module.exports = { countTypesInArray };
