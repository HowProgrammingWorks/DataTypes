'use strict';

const fn = () => {
  console.log(add(2, 2));

  function add(a, b) {
    return a + b;
  }
};
fn();

module.exports = { fn };
