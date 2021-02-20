'use strict';

const fn = () => {
  const y = 'global';
  return y;
};

module.exports = { fn };
