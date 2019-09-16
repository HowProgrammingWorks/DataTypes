'use strict';

const arrOfTypes = [true, 'hello', 5, 12, -200, false];

const countTypesInArray = arr => {
  const hash = {};
  for (const item of arr) {
    const key = typeof(item);
    if (hash[key]) {
      hash[key] += 1;
    } else {
      hash[key] = 1;
    }
  }
  return hash;
};
console.log(countTypesInArray(arrOfTypes));

module.exports = { countTypesInArray };
