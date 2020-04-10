'use strict';

const fn = a => {
  const b = a++;
  return b;
};

module.exports = { fn };
