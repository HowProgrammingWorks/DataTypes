'use strict';

const countTypesInArray = arr => arr.reduce(
  (acc, item) => {
    const key = typeof item;
    acc[key] = ((key in acc) ? acc[key] : 0) + 1;
    return acc;
  },
  {}
);

module.exports = { countTypesInArray };
