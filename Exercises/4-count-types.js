'use strict';

const array = [true, 'hello', 5, 12, -200, false, false,
  'word', { name: 'Nikita', age: 15 }, NaN, undefined, undefined];

const countTypesInArray = (arr = array) => {
  const hash = {};
  for (const element of arr) {
    const t = typeof(element);
    hash[t] ? ++hash[(t)] : hash[(t)] = 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
