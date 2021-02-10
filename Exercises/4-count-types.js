'use strict';

const countTypesInArray = arr => {
  const obj = {};
  for (const item of arr) {
    const type = typeof item;
    type in obj ? obj[type]++ : (obj[type] = 1);
  }
  return obj;
};

module.exports = { countTypesInArray };
