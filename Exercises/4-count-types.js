'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];

const countTypesInArray = (arr) => {
  const result = {};
  for (const item of arr) {
    result[typeof item] > 0 ? ++result[typeof item] : (result[typeof item] = 1);
  }

  return result;
};

console.log('countTypesInArray :>> ', countTypesInArray(arr));

module.exports = { countTypesInArray };
