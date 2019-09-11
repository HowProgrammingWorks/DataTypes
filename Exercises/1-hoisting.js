'use strict';

const fn = () => {
  //console.log(number); //Cannot access 'number' before initialization
  const number = 1;
  console.log(number);
};

module.exports = { fn };
