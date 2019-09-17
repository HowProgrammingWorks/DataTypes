'use strict';

function countTypesInArray(arr) {
  const res = {};
  for (const el of arr) {
    const type = typeof el;
    (type in res) ? res[type]++ : res[type] = 1;
  }
  return res;
}

module.exports = { countTypesInArray };
