'use strict';

const countTypesInArray = arr => {
  const typeCount = {};

  for (const i of arr)
    typeCount[typeof i] = typeCount[typeof i] ? typeCount[typeof i] + 1 : 1;

  return typeCount;
};

module.exports = { countTypesInArray };
