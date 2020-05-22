'use strict';

function countTypesInArray (arr){
  for (const elem of arr) {
    const key = typeof elem;
    this[key] === undefined ? this[key] = 1 : this[key]++;
  }
  return this;
};
//module.exports = { countTypesInArray };

console.log(countTypesInArray([true, false, 15]));
