'use strict';

const fn = () => {
  const hoisted = 'blablabla';
  console.log(`Hoisted var is "${hoisted}".`);
  //var hoisted = 1;
};

module.exports = { fn };
