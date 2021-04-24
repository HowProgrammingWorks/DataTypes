'use strict';

const inc = obj => {
  obj.n = ++obj.n;
};

module.exports = { inc };
