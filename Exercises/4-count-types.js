'use strict';

const countTypesInArray = arr => {
  const typesMass = {};
  for (const el of arr) {
    const t = typeof el;
    typesMass[t] = (t in typesMass) ? typesMass[t] + 1 : 1;
  }
  return typesMass;
};

module.exports = { countTypesInArray };
