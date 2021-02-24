'use strict';

// const testArray = [
//   true,
//   1,
//   -1,
//   0,
//   'Test',
//   null,
//   undefined,
//   -Infinity,
//   Infinity,
//   [1, 2, 3],
//   { obj: 'obj' },
// ];

const countTypesInArray = input => {
  const r = {};
  for (const el of input) {
    const tor = typeof el;
    r[tor] = (r[tor]) ? r[tor] + 1 : 1;
  }
  return r;
};

module.exports = { countTypesInArray };
