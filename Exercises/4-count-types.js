'use strict';

const countTypesInArray = array => {
  const counter = { };
  for (const i of array) {
    if (typeof(i) in counter) {
      counter[typeof(i)]++;
    } else {
      counter[typeof(i)] = 1;
    }
  }
  return counter;
};


const data = [
  'jack',
  -5,
  56,
  false,
  'KPI',
  { name: 'FICT', location: 'Kiev' },
  { type: 'laptop', RAM: 8 },
  true,
  3.56,
  (a, b) => (a + b),
];

console.log(countTypesInArray(data));

module.exports = { countTypesInArray };
