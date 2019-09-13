'use strict';

const fn = () => {
  const b = a++;
  return b;
};

module.exports = { fn };
