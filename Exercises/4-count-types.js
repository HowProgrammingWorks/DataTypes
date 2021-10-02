'use strict';

const countTypesInArray = (arr) => {
  const counts = {};
  for (const item of arr) {
    const type = typeof item;
    const count = counts[type] || 0;

    counts[type] = count + 1;
  }

  return counts;
};

module.exports = { countTypesInArray };

