'use strict';

const fn = () => {
  const hoisting = 'Hello world!';
  console.log(hoisting);
};

module.exports = { fn };
