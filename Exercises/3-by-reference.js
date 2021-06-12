'use strict';

const inc = x => {
  if (typeof x === 'object')  x.n++;
};

module.exports = { inc };
