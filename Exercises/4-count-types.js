'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word'];

const countTypesInArray = array => {
  const obj = {};
  array.forEach(item => {
    const type = typeof item;
    const count = obj[type] || 0;
    obj[type] = count + 1;
  });
  return obj;
};

module.exports = { countTypesInArray };
