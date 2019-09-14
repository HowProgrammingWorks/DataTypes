'use strict';

const fn = function () {
  const local = 'local variable with hoisting';
  console.log(local);
};

module.exports = { fn };
