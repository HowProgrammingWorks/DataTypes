'use strict';

// undefined, 'undefined'
let emptyScalar;
console.log({ emptyScalar }, typeof(emptyScalar));

// null, 'object'
const emptyObject = null;
console.log({ emptyObject }, typeof(emptyObject));

// NaN, 'number'
let count = NaN;
console.log({ count }, typeof(count));

count = undefined + 1;
console.dir({ count });

//Infinity -Infinity 'number'
console.log(Infinity, -Infinity, typeof(Infinity));

// emptyObject is null
const s = (
  emptyObject === null ?
    'emptyObject is null' :
    'emptyObject is not null'
);
console.log(s);
