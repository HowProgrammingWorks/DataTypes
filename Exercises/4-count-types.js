'use strict';

const countTypesInArray = arr => {
  const tb = {};
  for (const item of arr) {
    const type = typeof item;
    const count = tb[type] || 0;
    tb[type] = count + 1;
  }
  return tb;
};

module.exports = { countTypesInArray };
