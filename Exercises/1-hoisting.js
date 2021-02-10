'use strict';

const fn = () => {
  const local = 'local variable with hoisting';
  console.log(local);
};

module.exports = { fn };
