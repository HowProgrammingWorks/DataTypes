// Подготовьте две реализации функции inc:
//   1. C сигнатурой inc(n: number): number, пример вызова: const a = 5;
//      const b = inc(a); console.dir({ a, b });
'use strict';

const inc = x => ++x;

module.exports = { inc };
