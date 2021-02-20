'use strict';

const countTypesInArray = value => {
  const tempArr = value.slice();
  const tempObj = {};
  let numCount = 0;
  let strCount = 0;
  let boolCount = 0;
  for (const item of tempArr) {
    if (typeof item === 'number') {
      numCount++;
      tempObj.number = numCount;
    } else if (typeof item === 'string') {
      strCount++;
      tempObj.string = strCount;
    } else {
      boolCount++;
      tempObj.boolean = boolCount;
    }
  }
  return tempObj;
};


module.exports = { countTypesInArray };
