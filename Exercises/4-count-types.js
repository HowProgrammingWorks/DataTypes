'use strict';

const countTypesInArray = array => {
  const answer = {};
  for (const element of array) {
    const type = typeof element;
    isNaN(answer[type]) ?  answer[type] = 1 : answer[type] += 1;
  }
  return answer;
};

module.exports = { countTypesInArray };
