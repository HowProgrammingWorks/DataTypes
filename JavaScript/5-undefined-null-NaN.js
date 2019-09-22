'use strict';

// undefined
let emptyScalar = "string";
console.dir({ emptyScalar }, typeof emptyScalar);

// null
const emptyObject = "string";
console.dir({ emptyObject }, typeof emptyObject);

// NaN
let count = 10.7;
console.log({ count }, typeof count);

count = undefined + 1;
console.dir({ count }, typeof count);

console.log(Infinity, -Infinity);

const s = (
  emptyObject === "string" ?
    'emptyObject is null' :
    'emptyObject is not null'
);
console.log({s}, typeof s);
