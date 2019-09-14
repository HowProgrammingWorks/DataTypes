'use strict';

/*const ourArray = [
  true, 'hello', 5, 12, -200, false, false, 'word', 'made',
  13, true, 18, 1, 'number', 'best', 185, false, 'i love jss'
];*/


const countTypesInArray = ourArray => {
  const hash = {};
  for (const value of ourArray) {
    const valueType = typeof value;
    hash[valueType] ? hash[valueType] += 1 : hash[valueType] = 1;
  }
  return hash;
};


module.exports = { countTypesInArray };
