'use strict';

function countTypesInArray(arr) {
  const result = {};
  for (const item of arr) {
    const type = typeof item;
    result[type] = (result[type] || 0) + 1;
  }
  return result;
}

module.exports = { countTypesInArray };
