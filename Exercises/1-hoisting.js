'use strict';

// 'use strict' забороняє підняття змінної
const fn = () => {
  const name = 'Yaroslav';
  console.log(`Hello, ${name}`);
};
module.exports = { fn };
