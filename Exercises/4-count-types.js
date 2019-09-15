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
    const counter = types[type] || 0;
    types[type] = counter + 1; // ++counter ?
  }
  return types;
};

module.exports = { countTypesInArray };
