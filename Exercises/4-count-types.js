'use strict';

const countTypesInArray = array => {
  const counters = { };
  for (const value of array) {
    if (typeof value in counters) {
      counters[typeof value]++;
    } else {
      counters[typeof value] = 1;
    }
  }
  return counters;
};

module.exports = { countTypesInArray };
