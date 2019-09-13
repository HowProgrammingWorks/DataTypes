'use strict';

const countTypesInArray  = funObjects => {
  const object2 = {};
  for (const ar of funObjects) {
    if (typeof ar in object2)
      object2[typeof ar]++;
    else object2[typeof ar] = 1;
  }
  return object2;
};
module.exports = { countTypesInArray };

