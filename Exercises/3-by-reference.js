'use strict';

// const inc = num => ++num.n;

const inc = function (object) {
  ++object.n;
};

module.exports = { inc };
