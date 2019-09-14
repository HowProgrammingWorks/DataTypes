'use strict';

const arr = [true, 'hello', 5, 12, -200, false, false, 'word'];
const typesObject = { number: 0, string: 0, boolean: 0 };

const countTypesInArray = elements => {
  for (const element of elements) {
    if (typeof element === 'number') typesObject.number += 1;
    if (typeof element === 'string') typesObject.string += 1;
    if (typeof element === 'boolean') typesObject.boolean += 1;
  }
  return typesObject;
};

countTypesInArray(arr);

// module.exports = { countTypesInArray };
