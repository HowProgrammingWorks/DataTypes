'use strict';

hoisted = 5; // Assign 5 to hoisted
console.dir({ hoisted }); // { bubbleEffect: 5 }
var hoisted; // Declare hoisted

let scalarVariable = 6;
const scalarConstant = 7;

const o = { scalarVariable, scalarConstant };
console.dir(o);

o.scalarVariable = 8;
scalarVariable = 9;

console.dir(o);
