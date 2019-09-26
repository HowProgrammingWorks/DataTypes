'use strict';

const arr = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  {
    name: 'vitya',
    age: 25
  },
  [ 23, 23, 23, ],
  function () {
    console.log('hello');
  }
];

const countTypesInArray = arr => {
  const h = {};
  for (const e of arr) {
    const t = typeof e;
    h[(t)] = !(t in h) ? 1 : ++h[(t)];
  }
  return h;
};

console.log(countTypesInArray(arr));

module.exports = { countTypesInArray };
