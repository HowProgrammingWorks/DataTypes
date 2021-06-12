'use strict';

const countTypesInArray = a => {
  const r = {};
  for (const v of a) {
    if (Object.prototype.hasOwnProperty.call(r, (typeof v))) {
      const a = typeof v;
      r[a]++;
    } else { r[typeof v] = 1; }
  }
  return r;
};

module.exports = { countTypesInArray };
