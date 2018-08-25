'use strict';

const org = 'HowProgrammingWorks';

// delete org; // Raises SyntaxError in strict mode

const country = {
  name: 'Chile',
  ruler: 'Augusto Pinochet',
  born: 1915,
  alive: false
};

delete country.ruler;
console.dir({ country }); // { country: {name: 'Chile', born: 1915, alive: false } }

delete country.born;
delete country.population;
console.dir({ country }); // { country: {name: 'Chile', alive: false } }

const currencies = ['BTC', 'EUR', 'UAH', 'USD'];

console.log('currencies[1]:', currencies[1], 1 in currencies); // currencies[1]: EUR true
console.log('currencies[2]:', currencies[2], 2 in currencies); // currencies[2]: UAH true

delete currencies[1];
currencies[2] = undefined;
console.dir({ currencies }); //{ currencies: [ 'BTC', <1 empty item>, undefined, 'USD' ] }

console.log('currencies[1]:', currencies[1], 1 in currencies); //currencies[1]: undefined false
console.log('currencies[2]:', currencies[2], 2 in currencies); //currencies[2]: undefined true
