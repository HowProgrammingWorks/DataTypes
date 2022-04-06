'use strict';



const countTypesInArray = (arr) => {
  const listType = {};
  for (const key of arr) {
    const keyObj = typeof key;
    const counter = listType[keyObj] || 0;
    listType[keyObj] = counter + 1;
  }
  return listType;
};

//countTypesInArray([true,'hello', 5, 12, -290, false, false, 'word']);
module.exports = { countTypesInArray };
