'use strict';

const i = 5;
const f = 10.3;
const s = 'Hello';
const b = true;

const person = {
  name: 'Marcus Aurelius',
  born: 121,
  city: 'Roma',
  position: 'emperor'
};

person.city = 'Odessa';

const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];

cities.push('Odessa');
cities.unshift('New York');

console.log('shift: ' + cities.shift()); // shift: New York
console.log('pop: ' + cities.pop()); // pop: Odessa

console.log({ i }, typeof(i)); // { i: 5} 'number'
console.log({ s }, typeof(s)); // { s: 'Hello'} 'string'
console.log({ b }, typeof(b)); // { b: true} 'boolean'
console.log({ f }, typeof(f)); // { f: 10.3} 'number'

console.log({ person }, typeof(person)); /* { person:
                                              { name: 'Marcus Aurelius',
                                                born: 121,
                                                city: 'Odessa',
                                                position: 'emperor' } } */
console.log({ isArray: Array.isArray(person) }); // {isArray: false}

console.log({ cities }, typeof(cities)); // ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
console.log({ isArray: Array.isArray(cities) }); // { isArray: true }

console.log({ instanceofArray: cities instanceof Array }); // { instanceofArray: true }
