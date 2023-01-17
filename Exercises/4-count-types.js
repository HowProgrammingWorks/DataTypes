'use strict';

const countTypesInArray = (types) => {
  const hash = {};
  for (const value of types) {
    const type = typeof value;
    hash[type] = hash[type] ? hash[type] + 1 : 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
