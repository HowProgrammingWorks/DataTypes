// Подготовьте две реализации функции inc:
//   2. C сигнатурой inc(num: Num), где Num является объектом с полем n, чтобы
//      функция изменила поле исходного объекта переданного по ссылке, пример
//      вызова const obj = { n: 5 }; inc(obj); console.dir(obj);
'use strict';

const inc = obj => {
  ++obj.n;
};

module.exports = { inc };
