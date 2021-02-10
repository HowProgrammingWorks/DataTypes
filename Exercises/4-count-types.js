'use strict';

const countTypesInArray = arr => {
  const obj = {};
  for (const v of arr) {
    const type = typeof v;
    const count = obj[type];
    if (count) obj[type] += 1;
    else obj[type] = 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
