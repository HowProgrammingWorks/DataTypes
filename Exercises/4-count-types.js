'use strict';

const countTypesInArray = Arr => {
  const h = { };
  for (const t of Arr) {
    const m =  typeof t;
    h[m] = h[m] || 0;
    h[m]++;
  }
  return h;
};

module.exports = { countTypesInArray };
