'use strict';

/* const arr = [true, 3, '4', false, { n: 3 }, function (x) { return x + 1; },
  { name: 'Marc' }, 'Marc', 3.11, [1, 2, 4], 5];*/

const countTypesInArray = arr => {
  const result = {};
  for (const item of arr) {
    const temp = typeof(item);
    if (result[temp]) result[temp]++;
    else result[temp] = 1;
  }
  return result;
};

module.exports = { countTypesInArray };
