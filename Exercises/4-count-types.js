'use strict';

const countTypesInArray = array => {
  const counters = {};
  for (const elemAr of array) {
    const elemType = typeof(elemAr);
    const counter = counters[elemType] || 0;
    counters[elemType] = counter + 1;
  }
  return counters;
};
module.exports = { countTypesInArray };
