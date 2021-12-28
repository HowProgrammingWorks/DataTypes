'use strict';
// eslint-disable-next-line max-len
const countTypesInArray = [true, 'hello', 5, 12, -200000000000000000, false, undefined, 'wooooord', 'Js', NaN, 'Mao', 'Travis', true, 1222, 345, undefined, false, 'Saske', 333];
const collection = {
  number: 0,
  undefined: 0,
  boolean: 0,
  string: 0,
};
for (const value of countTypesInArray) {
  collection[typeof value]++;
}
console.dir(collection);
for (const key in collection) {
  delete collection[key];
}
for (const value of countTypesInArray) {
  // eslint-disable-next-line no-prototype-builtins
  if (!collection.hasOwnProperty(typeof value)) {
    collection[typeof value] = 1;
  } else {
    collection[typeof value]++;
  }
}
console.dir(collection);
module.exports = { countTypesInArray };
