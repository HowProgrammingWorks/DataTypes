'use strict';

const fn = () => {
  let hoisted = 0;
  console.log(hoisted);
  hoisted = 4;
  console.log(hoisted);
  // var hoisted;
};

module.exports = { fn };
