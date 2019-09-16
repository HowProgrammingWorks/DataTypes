'use strict';

const countTypesInArray = Arr => {
  const obj = {};
  for (const i of Arr) {
    const type = typeof i;
    obj[type] = obj[type] || 0;
    obj[type]++;
  }
  return obj;
};

module.exports = { countTypesInArray };
