'use strict';

var bubbleEffect = 5;

console.dir({ bubbleEffect }); // { bubbleEffect: 5 }

let scalarVariable = 6;
const scalarConstant = 7;

const o = { scalarVariable, scalarConstant };
console.dir(o); // { scalarVariable: 6, scalarConstant: 7 }

o.scalarVariable = 8;
scalarVariable = 9;

console.dir(o); // { scalarVariable: 8, scalarConstant: 7 }
