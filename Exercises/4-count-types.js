'use strict';

const countTypesInArray = scalars => {
  const hash = {};
  for (const scalar of scalars) {
    const type = typeof scalar;
    hash[type] = hash[type] ? ++hash[type] : 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
