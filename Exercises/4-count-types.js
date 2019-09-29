'use strict';

const countTypesInArray = function (array) {
  const obj = {};
  for (const elemAr of array) {
    const temp = typeof(elemAr);
    obj[temp] = obj[temp] ? ++obj[temp] : 1;
  }
  return obj;
};
module.exports = { countTypesInArray };
