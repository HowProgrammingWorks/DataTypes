'use strict';

const fn = () => {
  console.log(hoisting);
  hoisting = 'Hello world!';
  console.log(hoisting);
  var hoisting;
};

module.exports = { fn };
