'use strict';

const countTypesInArray = array => {
  const object = {};
  for (const i of array) {
    if (object[typeof i]) {
      ++object[typeof i];
    } else {
      object[typeof i] = 1;
    }
  }
  return object;
};

module.exports = { countTypesInArray };
