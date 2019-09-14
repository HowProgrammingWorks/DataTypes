'use strict';

const countTypesInArray = a => a.reduce((b, i) => {
  const t = typeof i;
  b[t] = b[t] !== undefined ? ++b[t] : 1;
  return b;
}, {});

module.exports = { countTypesInArray };
