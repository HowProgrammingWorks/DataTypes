'use strict';
/**
 * Подготовьте функцию inc с сигнатурой inc(num: Num),
 * где Num является объектом с полем n,
 * чтобы функция изменила поле исходного объекта переданного по ссылке,
 * пример вызова const obj = { n: 5 }; inc(obj); console.dir(obj);
 */

const inc = obj => {
  obj.n++;
};

// const obj = { n: 5 };
// inc(obj);
// console.dir(obj);

module.exports = { inc };
