'use strict';

const i = 5;
const s = 'Hello';
const b = true;
const f = 10.3;

const o = {
  name: 'Marcus Aurelius',
  born: 121,
  city: 'Roma',
  position: 'emperor'
};

o.city = 'Odessa';

const a = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];

a.push('Odessa');

console.log({ i }, typeof(i));
console.log({ s }, typeof(s));
console.log({ b }, typeof(b));
console.log({ f }, typeof(f));
console.log({ o }, typeof(o), { isArray: Array.isArray(o) });
console.log({ a }, typeof(a), { isArray: Array.isArray(a) });
