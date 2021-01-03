'use strict';

const a = 0;

const fn = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i + a);
  }
};

module.exports = { fn };
