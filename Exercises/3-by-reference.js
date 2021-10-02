'use strict';

const inc = (obj) => {
  if ('object' === typeof obj) {
    ++obj.n;
  }
};

module.exports = { inc };
