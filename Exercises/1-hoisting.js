'use strict';

const fn = () => {
  console.log(rizedVar);
  //use var 4 use hoist. const and let not supported by standard...
  var rizedVar = 'Use before declare, but it udef';
};

module.exports = { fn };
