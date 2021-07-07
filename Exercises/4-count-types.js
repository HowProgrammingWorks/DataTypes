'use strict';

/*
  It's better to define variable itemType like below
  because operator 'typeof' has some wrong behaviour
  with null and function.

  const itemType = (
    item === null ?
      null :
      (typeof item === 'function' ? 'object' : typeof item)
  );
*/

const countTypesInArray = sample => {
  const types = {};
  for (const item of sample) {
    const itemType = typeof item;
    const counter = types[itemType] || 0;
    types[itemType] = counter + 1;
  }
  return types;
};

module.exports = { countTypesInArray };
