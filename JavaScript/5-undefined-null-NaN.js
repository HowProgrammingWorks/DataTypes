'use strict';

// undefined

let u;
console.log({ u }, typeof(u));

// null

const o = null;
console.log({ o }, typeof(o));

// NaN

let n = NaN;
console.log({ n }, typeof(n));

n = undefined + 1;
console.log(n);

console.log(Infinity, -Infinity, typeof(Infinity));

const s = o === null ? 'o is null' : 'o is not null';
console.log(s);
