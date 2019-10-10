'use strict';

const countTypesInArray = array => {
  const counters = {};
  for (const element of array) {
    const type = typeof element;
    const count = counters[type] || 0;
    counters[type] = count + 1;
  }
  return counters;
};

module.exports = { countTypesInArray };
