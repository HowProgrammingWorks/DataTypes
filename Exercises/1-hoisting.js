'use strict';

const fn = () => {
  const variable = 'variable without hoisting';
  return variable;
};

module.exports = { fn };
