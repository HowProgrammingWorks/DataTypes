'use strict';
let result = 'Not null';
const fn = x => {
  if (x === null) result = 'Is null';
  console.log(result);
};
module.exports = { fn };
