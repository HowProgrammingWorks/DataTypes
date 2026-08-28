'use strict';

const inc = function(obj) {
  obj.n += 1;
};

// function inc(num) {
//   if (num && typeof num.n === 'number') {
//     num.n += 1;
//   } else {
//     throw new Error("Invalid input: Object must have a numeric 'n' field");
//   }
// }

module.exports = { inc };
