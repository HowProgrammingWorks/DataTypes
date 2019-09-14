'use strict';

const fn = () => {
  console.log(value);
  var value = 'something';
};

fn();

module.exports = { fn };
