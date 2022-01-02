'use strict';

const countTypesInArray = (values) => {
  const obj = {};
  for (const value of values) {
    const type = typeof(value);
    if (!obj[type]) obj[type] = 0;
    obj[type]++;
  }
  return obj;
};

module.exports = { countTypesInArray };
