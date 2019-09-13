/* Use the global form of 'use strict' that 'hosting' is not defined */

'use strict';

const fn = () => {
  const name = 'Fedor';
  console.log(`Welcome, ${name}, to Saint-Peterburg`);
};

module.exports = { fn };

