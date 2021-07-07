'use strict';

const countTypesInArray = array => {
  const counters = { };
  for (const value of array) {
    counters[typeof value] = (counters[typeof value] + 1) || 1;
  }
  return counters;
};

module.exports = { countTypesInArray };
