'use strict';

const fn = () => {
  //var must be here. put const just to fix eslint error
  const v = 5;
  console.log(v);
};

module.exports = { fn };
