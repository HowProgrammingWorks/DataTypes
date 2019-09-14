'use strict';

// const trash = ['string', true, 'another_string', false, 'number', [], '333',
//   333, true, 22, false, 0, '0', 1, '', {}, [], true, {}, []];

// const countTypesInArray = arr => {
//   const types = { number: 0, string: 0, boolean: 0, object: 0 }; //
//   for (const el of arr) {
//     types[typeof el]++;
//   }
//   return types;
// };

const countTypesInArray = arr => {
  const types = {};
  for (const el of arr) {
    const type = typeof el;
    types[type] = types[type] ? types[type] + 1 : 1;
  }
  return types;
};

module.exports = { countTypesInArray };
