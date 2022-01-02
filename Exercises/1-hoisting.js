'use strict';

const fn = (name) => {
  greet = 'Hello, ';
  console.log(greet + name);
  var greet;
};

module.exports = { fn };
