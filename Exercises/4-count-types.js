'use strict';

const arr = [
  1, 'Kiev', true, -100, undefined,
  false, { name: 'ser' }, 20, 'Warrior life', true
];

const countTypesInArray = arr => {
  const obj = {};
  for (const v of arr) {
    obj[typeof v] === undefined ?
      obj[typeof v] = 1 :
      ++obj[typeof v];
  }
  return obj;
};

console.log(countTypesInArray(arr));

module.exports = { countTypesInArray };

// const  obj = {
//   number: 0,
//   string: 0,
//   object: 0,
//   undefined: 0,
//   boolean: 0,
// };
//for (const v of arr) ++obj[typeof v];
//for (const key in obj) delete obj[key];
// for (const v of arr) {
//   obj[typeof v] === undefined ?
//     obj[typeof v] = 1 :
//     ++obj[typeof v];
// }
// const countTypesInArray = (arr, obj) => {
//   for (const key in obj) delete obj[key];
//   for (const v of arr) {
//     obj[typeof v] === undefined ?
//       obj[typeof v] = 1 :
//       ++obj[typeof v];
//   }
// };
