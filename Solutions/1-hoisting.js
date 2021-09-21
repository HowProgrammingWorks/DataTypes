'use strict';

const fn = () => {
  console.log({ a });
  var a = 5;
};

console.log(fn);

module.exports = { fn };
