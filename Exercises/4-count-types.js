'use strict';

const countTypesInArray = array => {
  const types = { number: 0, boolean: 0, string: 0 };
  for (const a of array) {
    for (const b of Object.keys(types)) { if (typeof a === b) types[b]++; }
  }
  if (types.number === 0) delete types.number;
  if (types.boolean === 0) delete types.boolean;
  if (types.string === 0) delete types.string;
  return types;
};

module.exports = { countTypesInArray };
