'use strict';

const countTypesInArray = values => {
  const counters = {};

  for (const value of values) {
    const type = typeof value;
    counters[type] = counters[type] === undefined ? 1 : counters[type] + 1;
  }

  return counters;
};

module.exports = { countTypesInArray };
