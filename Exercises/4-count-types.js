'use strict';

const countTypesInArray = typeArray => {
  const hash = {};
  for (const Value of typeArray) {
    const t = typeof(Value);
    hash[t] = t in hash ? ++hash[t] : 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
