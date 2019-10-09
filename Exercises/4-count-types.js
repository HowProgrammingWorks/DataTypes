'use strict';

const arrayOfTypes = [true, 'hello', 5, 12, -200, false, false, 'word'];

const countTypesInArray = array => {
  const hash = {};
  for (const element of array) {
    const elementType = typeof(element);
    hash[elementType] ? ++hash[elementType] : hash[elementType] = 1;
  }
  return hash;
};
countTypesInArray(arrayOfTypes);
module.exports = { countTypesInArray };
