'use strict';

const fn = () => {
  const local = 'hoisted var';
  console.log(local);
};

module.exports = { fn };
