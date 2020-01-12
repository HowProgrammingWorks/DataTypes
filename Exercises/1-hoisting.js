/* eslint-disable no-use-before-define */
/* eslint-disable no-unreachable */
/* eslint-disable no-var */
'use strict';

const fn = () => {
  return { a };
  var a = 1;
};

module.exports = { fn };
