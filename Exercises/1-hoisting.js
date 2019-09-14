// Напишите функцию, содержащую внутри себя переменную с поднятием.
//   Опубликуйте пример с функцией на github.
//   Используйте eslint, для поиска проблем в коде.
//   При необходимости исправьте пример и отправьте изменеия на github.
'use strict';

// const fn = () => {
//   a = 5;                 'a' was used before it was defined.
//   console.log(a);        'a' was used before it was defined
//   var a;                 Unexpected var, use let or const instead.
// };

const fn = () => {
  const a = 5;
  console.log(a);
};

module.exports = { fn };
