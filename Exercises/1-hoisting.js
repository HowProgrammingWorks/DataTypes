/* eslint-disable no-var */
/* eslint-disable no-use-before-define */
'use strict';

const fn = () => {
  console.log({ a });
  var a = 10;
};

module.exports = { fn };
