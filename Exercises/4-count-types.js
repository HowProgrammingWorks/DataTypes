'use strict';

const countTypesInArray = typesArray => {
  const counter = {};

  for (const item of typesArray) {
    const key = typeof item;
    counter[key] = (counter[key]) ? ++counter[key] : 1;
  }

  return counter;
};

// второй вариант
// const countTypesInArray = (types = []) => types.reduce((counter, item) => {
//   const key = typeof item;
//   counter[key] = (counter[key]) ? ++counter[key] : 1;
//   return counter;
// }, {});


module.exports = { countTypesInArray };
