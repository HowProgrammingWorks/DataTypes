'use strict';

const fn = (x = 1) => {
  const y = 2;
  console.log(x + y);
};

module.exports = { fn };
