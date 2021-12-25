'use strict';

const countTypesInArray = (values) => {
  const hash = {};
  for (const i of values) {
    const type = typeof i;
    hash[type] ? ++hash[type] : hash[type] = 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
