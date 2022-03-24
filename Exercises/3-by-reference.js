'use strict';

const inc = (num) => {
  if (typeof num === 'object') {
    num.n++;
  }
};

module.exports = { inc };
