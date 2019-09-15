'use strict';

const countTypesInArray = arr => {
  const counter = {};
  for (const item of arr) {
    const type = typeof item;
    counter[type]++ ? counter[type] : counter[type] = 1;
  }
  return counter;
};

module.exports = { countTypesInArray };
