'use strict';

const countTypesInArray = x => {
  const obj = {};
  for (const i of x) {
    obj[typeof i] ? ++obj[typeof i] : obj[typeof i] = 1;
  }
  return obj;
};

module.exports = { countTypesInArray };

