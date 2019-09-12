'use strict';

const fn = () => {
  let x = 1;
  if (x) {
    x = 5;
    console.log(x);
  }
  console.log(x);
};

fn();

module.exports = { fn };
