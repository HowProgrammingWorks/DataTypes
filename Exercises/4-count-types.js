'use strict';
const countTypesInArray = (arr) => {
  const counter = {};
  for (const element of arr) {
    const type = typeof element;
    const count = counter[type] || 0;
    counter[type] = count + 1;
  }
  return counter;
};

module.exports = { countTypesInArray };
