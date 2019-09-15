'use strict';

const countTypesInArray = values => {
  const obj = {};
  for (const value of values) {
    const type = typeof value;
    if (obj[type]) {
      obj[type]++;
    } else {
      obj[type] = 1;
    }
  }
  return obj;
};




module.exports = { countTypesInArray };
