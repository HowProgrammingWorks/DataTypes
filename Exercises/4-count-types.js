'use strict';
const countTypesInArray = arr => {
  const obj = {};
  for (const a of arr) {
    const type = typeof a;
    obj[type] = obj[type] ? ++obj[type] : 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
