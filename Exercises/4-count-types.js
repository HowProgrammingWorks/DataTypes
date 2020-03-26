'use strict';

const countTypesInArray = values => {
  const count = {};
  for (const val of values) {
    const type = typeof val;
    type in count ? count[type]++ : count[type] = 1;
  }
  return count;
};

module.exports = { countTypesInArray };
