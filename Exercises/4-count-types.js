'use strict';

const arr = [
  1, 'Kiev', true, -100, undefined,
  false, { name: 'ser' }, 20, 'Warrior life', true
];

const countTypesInArray = arr => {
  const obj = {};
  for (const v of arr) {
    const type = typeof v;
    const count = obj[type];
    count === undefined ?
      obj[type] = 1 :
      obj[type] += 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
