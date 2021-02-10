'use strict';

const countTypesInArray = array => {
  const ret = {};
  for (const item of array) {
    const type = typeof item;
    ret[type] = ret[type] ? ++ret[type] : 1;
  }
  return ret;
};

module.exports = { countTypesInArray };
