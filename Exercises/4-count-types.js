'use strict';

const countTypesInArray = arr => arr.reduce(
  (acc, item) => {
    const key = typeof item;
    acc[key] = acc[key] ? acc[key] + 1 : 1;
    return acc;
  },
  {}
);

module.exports = { countTypesInArray };
