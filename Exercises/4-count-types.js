'use strict';

const countTypesInArray = (arr) => {
  const typeCount = {};
  for (const item of arr) {
    const type = typeof item;
    const Counter = typeCount[type] || 0;
    typeCount[type] = Counter + 1;
  }
  return typeCount;
};


module.exports = { countTypesInArray };
