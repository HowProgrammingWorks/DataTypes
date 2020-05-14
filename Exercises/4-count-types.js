'use strict';

const countTypesInArray = arr => {
  const itemsArr = {};
  for (const item of arr) {
    const type = typeof item;
    const count = itemsArr[type] || 0;
    itemsArr[type] = count + 1;
  }
  return itemsArr;
};

module.exports = { countTypesInArray };
