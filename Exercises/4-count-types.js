'use strict';

const countTypesInArray = data => {
  const h = {};
  for (const i of data) {
    const type = typeof i;
    if (h[type]) {
      h[type]++;
    } else {
      h[type] = 1;
    }
  }
  return h;
};

module.exports = { countTypesInArray };
