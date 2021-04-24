'use strict';

/*const arr = [true, 3, '4', false, { n: 3 }, function (x) { return x + 1; },
  { name: 'Marc' }, 'Marc', 3.11, [1, 2, 4], 5];*/

const countTypesInArray = arr => {
  const result = {};
  for (const item of arr) {
    const type = typeof item;
    const count = result[type];
    if (count) result[type] = count + 1;
    else result[type] = 1;
  }
  return result;
};

//console.dir(countTypesInArray(arr));

module.exports = { countTypesInArray };
