'use strict';

const countTypesInArray = arr => {
  const object = {};
  for (const item of arr) {
    const key = typeof(item);
    if (key in object) {
      object[key] += 1;
    } else {
      object[key] = 1;
    }
  }
  return object;
};

const arr = [
  'true',
  5,
  'hello',
  -350,
  'undefined',
  ['hi', 54, { n: 5 }],
  { a: 1, b: 'not bad' }
];

countTypesInArray(arr);


module.exports = { countTypesInArray };
