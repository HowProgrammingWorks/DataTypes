'use strict';

const countTypesInArray = () => {
  const array = [true, 'hello', 5, 12, -200, false, false,
    'word', { name: 'Nikita', age: 15 }, NaN, undefined, undefined];
  const hash = {};
  for (const element of array) {
    const type = typeof(element);
    hash[type] ? ++hash[(type)] : hash[(type)] = 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
