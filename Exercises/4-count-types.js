'use strict';

const countTypesInArray = arr => {
  const types = {};
  for (const el of arr) {
    const type = el === null ? 'null' : typeof el;
    const counter = types[type] || 0;
    types[type] = counter + 1;
  }
  return types;
};

module.exports = { countTypesInArray };
