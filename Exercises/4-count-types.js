'use strict';

//const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];

const countTypesInArray = (arr) => {
  const conters = {};
  for (const el of arr) {
    const type = typeof el;
    const count = conters[type] || 0;
    conters[type] = count + 1;
  }
  return conters;
};

module.exports = { countTypesInArray };
