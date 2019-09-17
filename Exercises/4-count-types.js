'use strict';

const countTypesInArray = mas => {
  const obj = {};
  for (const i of mas) {
    if (obj[typeof i] === undefined)
      obj[typeof i] = 1;
    else
      obj[typeof i]++;
  }
  return obj;
};

module.exports = { countTypesInArray };
