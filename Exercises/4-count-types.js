'use strict';

const countTypesInArray = typeArray => {
  const hash = {};
  for (const Value of typeArray)
    hash[typeof(Value)] = typeof(Value) in hash ? hash[typeof(Value)] + 1 : 1;
  return hash;
};

module.exports = { countTypesInArray };
