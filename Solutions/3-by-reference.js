'use strict';

const inc = (obj) => {
  if (typeof obj === 'object') {
    obj.n++;
  }
};

module.exports = { inc };
