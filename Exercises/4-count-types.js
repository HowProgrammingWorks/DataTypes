'use strict';

const countTypesInArray = (array) => {
    const object = {};
    for (const element of array) {
        const type = typeof element;
        if (!object[type]) object[type] = 0;
        object[type]++;
    }
    return object;
};

module.exports = { countTypesInArray };
