'use strict';

// undefined
let emptyScalar;
console.log({ emptyScalar }, typeof(emptyScalar));

// null
const enptyObject = null;
console.log({ enptyObject }, typeof(enptyObject));

// NaN
let count = NaN;
console.log({ count }, typeof(count));

count = undefined + 1;
console.dir({ count });

console.log(Infinity, -Infinity, typeof(Infinity));

const s = (
  enptyObject === null ?
    'enptyObject is null' :
    'enptyObject is not null'
);
console.log(s);
