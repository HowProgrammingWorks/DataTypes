'use strict';
const countTypesInArray = arr => {
  const dynTypes = {};
  for (const itm of arr) {
    const t = typeof itm;
    if (!(t in dynTypes)) {
      dynTypes[(t)] = 0;
    }
    dynTypes[(t)] += 1;
  }
  return dynTypes;
};
module.exports = { countTypesInArray };
