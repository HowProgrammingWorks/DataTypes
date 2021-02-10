'use strict';

const countTypesInArray = list => {
  const obj = {};
  for (const item of list) {
    const instance = typeof item;
    (instance in obj) ?
      (obj[instance] += 1) :
      (obj[instance] = 1);
  }
  return obj;
};
module.exports = { countTypesInArray };
