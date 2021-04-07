'use strict';

const fn = () => {
  console.log('Hosting variable \'a\'');
  const a = 5;
  console.log(a);
};

module.exports = { fn };
