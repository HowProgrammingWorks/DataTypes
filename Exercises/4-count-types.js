'use strict';

const countTypesInArray = a => {
  const h = {};
  for (const e of a) {
    typeof e in h ? h[typeof e] += 1 : h[typeof e] = 1;
  }
  return h;
};

module.exports = { countTypesInArray };

