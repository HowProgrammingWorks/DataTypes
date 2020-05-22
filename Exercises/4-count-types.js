'use strict';

const countTypesInArray = arr => {
  const obj = {};
  for (const elem of arr) {
    const key = typeof elem;
    obj[key] === undefined ? obj[key] = 1 : obj[key]++;
  }
  return obj;
};
module.exports = { countTypesInArray };
