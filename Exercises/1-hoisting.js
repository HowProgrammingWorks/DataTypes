'use strict';

const fn = () => {
  const c = a;
  var a = 3;
  const b = 4;
  const sum = c + b;
  return sum;
};

module.exports = { fn };
