'use strict';

const fn = () => {
  const local = 'hoisted variable';
  console.log(local);
};

module.exports = { fn };
