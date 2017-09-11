'use strict';

const scalar = 5;
const object1 = { field: scalar };
const object2 = object1;

console.dir({ object1 });
console.dir({ object2 });
console.dir({ scalar });

object1.field = 6;

console.dir({ object1 });
console.dir({ object2 });
console.dir({ scalar });
