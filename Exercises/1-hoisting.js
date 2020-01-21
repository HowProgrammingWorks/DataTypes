'use strict';

const fn = () => {
  const a = 3;
  const b = 4;
  const c = a;
  const sum = c + b;
  return sum;
};

module.exports = { fn };
