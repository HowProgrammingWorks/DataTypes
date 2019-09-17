'use strict';
const countTypesInArray = Array => {
  const List = {};
  for (const element of Array) {
    (List[typeof element] === undefined) ?
      List[typeof element] = 1 :
      List[typeof element]++;
  }
  return List;
};
module.exports = { countTypesInArray };
