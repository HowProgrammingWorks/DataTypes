'use strict';

const fn = function () {
  var local = 'local variable with hoisting';
  console.log(local);
};

module.exports = { fn };