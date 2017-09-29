'use strict';

const org = 'HowProgrammingWorks';

// console.log(delete org); // Raises SyntaxError in strict mode

const country = {
  name: 'Chile',
  ruler: 'Augusto Pinochet',
  born: 1915,
  alive: false
};

delete country.ruler;
console.dir({ country });

console.log(delete country.born);
console.log(delete country.population);
console.dir({ country });

const currencies = ['BTC', 'EUR', 'UAH', 'USD'];

console.log('currencies[1]:', currencies[1], 1 in currencies);
console.log('currencies[2]:', currencies[2], 2 in currencies);

delete currencies[1];
currencies[2] = undefined;
console.dir({ currencies });

console.log('currencies[1]:', currencies[1], 1 in currencies);
console.log('currencies[2]:', currencies[2], 2 in currencies);
