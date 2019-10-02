'use strict';

const countTypesInArray = array => {
  const r = {};

  for (const i of array) !r[typeof i] ? r[typeof i] = 1 : r[typeof i] += 1;

  return r;
};

module.exports = { countTypesInArray };
