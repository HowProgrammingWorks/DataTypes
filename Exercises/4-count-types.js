'use strict';



const array = [23, 'wor', 75, true, -34, { s: 1, z: 2 }, 'aga', 'false', false];


const object = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
};
for (const variable of array) {
  object[typeof variable]++;
}

const countTypesInArray  = funObjects => {
  const object2 = {};
  for (const ar of funObjects) {
    object2[typeof ar] ? object2[typeof ar]++ : object2[typeof ar] = 1;
  }
  return object2;
};
module.exports = { countTypesInArray };
