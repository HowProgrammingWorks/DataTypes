'use strict';

// undefined

let u;
console.log({ u }, typeof(u));

// null

let o = null;
console.log({ o }, typeof(o));

// NaN

let n = NaN;
console.log({ n }, typeof(n));

n = undefined + 1;
console.log({ n }, typeof(n));
