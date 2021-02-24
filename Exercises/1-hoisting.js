/* eslint-disable no-var */
/* eslint-disable no-use-before-define */
'use strict';

const fn = () => {
  console.log(b);
  var b = 5;
};

module.exports = { fn };
