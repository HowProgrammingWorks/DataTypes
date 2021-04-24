'use strict';

const countTypesInArray = typeArray => {
  const hash = {};
  for (const value of typeArray) {
    const t = typeof(value);
    hash[t] = t in hash ? ++hash[t] : 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
