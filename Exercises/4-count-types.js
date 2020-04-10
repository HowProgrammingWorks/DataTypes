'use strict';
const countTypesInArray = arr => {
  const obj = {};
  for (const item of arr) {
    const key = typeof item;
    (key in obj) ? obj[key] += 1 : obj[key] = 1;
  }
  return obj;
};
module.exports = { countTypesInArray };
