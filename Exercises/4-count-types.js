'use strict';
let arr = [true, 'hello', 5, 12, -200, false, false, 'word'],
    tb = {
        number : 0,
        string : 0,
        boolean : 0,
    };
const countTypesInArray = () => {
    for (const item of arr) {
        if (typeof item === 'number') {
            tb.number++;
        } else if (typeof item === 'string') {
            tb.string++;
        } else {tb.boolean++;}
    }
};
module.exports = { countTypesInArray };
