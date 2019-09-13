'use strict';

const countTypesInArray  = arg => {
  const result = {};
  for (const value of arg) {
    const field = typeof value;
    if (field in result)
      result[field]++;
    else result[field] = 1;
  }
  return result;
};
module.exports = { countTypesInArray };

