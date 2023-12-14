'use strict';

const countTypesInArray = (array) => {
    const typeCounts = {};
    for (const item of array) {
        const type = typeof item;
        typeCounts[type] = typeCounts[type] ? typeCounts[type] + 1 : 1;
    }
    return typeCounts;
};

module.exports = { countTypesInArray };

