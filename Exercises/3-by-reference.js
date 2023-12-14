'use strict';

const inc = (num) => {
    if (num && typeof num.n === 'number') {
        num.n += 1;
    }
};

module.exports = { inc };
