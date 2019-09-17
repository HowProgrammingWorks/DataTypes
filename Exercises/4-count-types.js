'use strict';
const multyTypeArray = [true, 'hello', 5, 12, -200,
  false, false, 'word', 'list', 35, 12, true, 'madMax',
  'logged', 12, 568, false, 34, 'rocket', 6, 7, true, false];
const countTypesInArray = arr => {
  const obj = { };
  for (const key of arr) {
    if ((typeof key) in obj) obj[(typeof key)] += 1;
    else obj[(typeof key)] = 1;
  }
  return obj;
};
console.log(countTypesInArray(multyTypeArray));
module.exports = { countTypesInArray };
