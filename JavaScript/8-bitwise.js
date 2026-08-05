'use strict';

const a = 9;
const b = 14;
const c = -9;

const aBinary = a.toString(2);
const bBinary = b.toString(2);
const cBinary = c.toString(2);

console.log(`${a} to base 2:  ${aBinary}`);
console.log(`${b} to base 2: ${bBinary}`);

console.log('Bitwise operators');

const andResult = a & b;
console.log(`${a} & ${b} = ${andResult}`);
console.log(`${aBinary} & ${bBinary} = ${andResult.toString(2)}`);

const orResult = a | b;
console.log(`${a} | ${b}`, ' = ', orResult);
console.log(`${aBinary} | ${bBinary} = ${orResult.toString(2)}`);

const xorResult = a ^ b;
console.log(`${a} ^ ${b}`, ' = ', xorResult);
console.log(`${aBinary} ^ ${bBinary} = ${xorResult.toString(2)}`);

const notA = ~a;
console.log(`~${a} = ${notA}`);
console.log(`~${aBinary} = ${notA.toString(2)}`);

const aShiftLeft = a << 2;
console.log(`${a} << ${2} = `, aShiftLeft);
console.log(`${aBinary} << ${2} = ${aShiftLeft.toString(2)}`);

const bShiftRight = b >> 2;
const bShiftUnsigned = b >>> 2;
console.log(`${b} >> ${2} = `, bShiftRight);
console.log(`${b} >>> ${2} = `, bShiftUnsigned);
console.log(`${bBinary} >> ${2} = ${bShiftRight.toString(2)}`);
console.log(`${bBinary} >>> ${2} = ${bShiftUnsigned.toString(2)}`);

const cShiftRight = c >> 2;
const cShiftUnsigned = c >>> 2;
console.log(`${c} >> ${2} = `, cShiftRight);
console.log(`${c} >>> ${2} = `, cShiftUnsigned);
console.log(`${cBinary} >> ${2} = ${cShiftRight.toString(2)}`);
console.log(`${cBinary} >>> ${2} = ${cShiftUnsigned.toString(2)}`);
