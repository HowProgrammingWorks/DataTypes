'use strict';

const array = [48, 'hello, world!', -61, false, 'programming', true, '7', 2];

const hash = {
  number: 0,
  string: 0,
  boolean: 0,
};

const countTypesInArray = () => {
  for (const el of array) {
    hash[typeof el]++;
  }
};

module.exports = { countTypesInArray };
