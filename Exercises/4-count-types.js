'use strict';

const typesArray = [
  'string', 1, Infinity, -Infinity,
  NaN, null, undefined, 1444n, {}, [], false,
  [], BigInt, NaN, typeof 1, 'object', 'string', 1, 5, 1n, 1e10, 'function'
];

const hashCollection = {
  number: 0,
  string: 0,
  null: 0,
  undefined: 0,
  object: 0,
  bigint: 0,
  function: 0,
  array: 0,
  boolean: 0,
};

for (const value of typesArray) {
  const checkedProperty = !Array.isArray(value) ? typeof value : 'array';

  if (value === null) hashCollection['null'] += 1;
  hashCollection[checkedProperty] += 1;
}

const countTypesInArray = (arr) => {
  const obj = {};
  arr.forEach((item) => {
    isNaN(obj[typeof item]) ? obj[typeof item] = 0 : null;
    obj[typeof item] += 1;
  });
  return obj;
};

module.exports = { countTypesInArray };
