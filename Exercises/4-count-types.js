'use strict';

const countTypesInArray = arr => {
  const hesh = { };

  for (const name of arr) {
    const t = typeof name;
    (t === 'boolean' || 'string' || 'number') && (hesh[t] = (hesh[t] || 0) + 1);
  }
  return hesh;
};

module.exports = { countTypesInArray };
