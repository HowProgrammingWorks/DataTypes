'use strict';

const fn = () => {
  const n = 47;
  console.log(n);
};

module.exports = { fn };

/*
The right answer should be:
const fn = () => {
  console.log(n);
  var n = 47;
  console.log(n);
};
*/
