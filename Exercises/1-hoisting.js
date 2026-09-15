'use strict';

const fn = function fn() {
  console.log(value);
  var value = 10;
};

module.exports = { fn };
