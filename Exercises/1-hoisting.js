'use strict';

// fixed hoisting
const fn = () => {
  let fixedVariable = 0;
  fixedVariable = 10;

  return fixedVariable;
};

module.exports = { fn };
