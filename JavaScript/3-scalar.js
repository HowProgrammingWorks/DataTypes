'use strict';

const scalar = 5;
const object1 = { scalar };
const object2 = object1;

console.dir({ object1 });
console.dir({ object2 });
console.dir({ scalar });

object1.scalar = 6;

console.dir({ object1 });
console.dir({ object2 });
console.dir({ scalar });
