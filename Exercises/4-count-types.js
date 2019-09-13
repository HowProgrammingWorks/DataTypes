'use strict';

const countTypesInArray = array => {
  const ret = {};
  for (const a of array) {
    const type = typeof a;
    ret[type] = ret[type] ? ++ret[type] : 1;
  }
  return ret;
};

module.exports = { countTypesInArray };
