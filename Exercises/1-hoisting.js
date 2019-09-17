'use strict';

const fn = () => {
  const hv = ' hoisted var';
  console.log(hv);
};

module.exports = { fn };
