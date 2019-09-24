'use strict';

const fn = () => {
  console.log(name); // Variable "name" hoisted and it value is "undefined"

  var name = 'Ilya';
};

module.exports = { fn };
