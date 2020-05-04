'use strict';

const fn = () => {
    console.log(a);
    var a = 123;
};
fn();
module.exports = { fn };
