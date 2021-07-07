'use strict';

const countTypesInArray = typesInArray => {
  const obj = {};
  let type;
  for (const key of typesInArray) {
    type = typeof key;
    obj[type] ? obj[type]++ : obj[type] = 1;
  }
  return obj;
};

module.exports = { countTypesInArray };
