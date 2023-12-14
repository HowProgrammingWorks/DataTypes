'use strict';

const fn = () => {
    console.log(value); 
    var value = 'some value';
    console.log(value); 
};


module.exports = { fn };
