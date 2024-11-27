'use strict';

const countTypesInArray = (ArrayOfTypes) => {
  const countTypes = {};
  for (const item of ArrayOfTypes) {
    const type = typeof item;
    const count = countTypes[type] ? countTypes[type] : 0;
    countTypes[type] = count + 1;
  }

  return countTypes;
};

module.exports = { countTypesInArray };
