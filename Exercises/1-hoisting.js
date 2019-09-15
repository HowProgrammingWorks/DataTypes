/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-var */

'use strict';

const fn = () => {
  xy = 5;
  xy++;
  var xy;
};
module.exports = { fn };
