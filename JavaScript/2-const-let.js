'use strict';

console.dir({ a });

var a = 5;
let b = 6;
const c = 7;

const o = { a, b, c };

console.dir(o);

a = 8;
b = 9;

console.dir(o);
