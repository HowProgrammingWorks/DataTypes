'use strict';

const countTypesInArray = array => {
  const output = {};

  for (const entry of array) {
    const type = typeof entry;
    if (type in output) output[type]++;
    else output[type] = 1;
  }

  return output;
};

const exampleArray = [
  true,
  'string',
  12.6,
  BigInt(12000),
  { field: 'value' },
  [ 'cats', 'dogs', false ],
  false,
  234444444444,
  'b',
  { x: 5, y: 4, z: 5 }
];

console.log(countTypesInArray(exampleArray));

module.exports = { countTypesInArray };
