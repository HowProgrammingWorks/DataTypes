'use strict';

const inc = obj => {
  if (typeof obj === 'object') {
    obj.n++;
  }
};
/* const inc = obj => obj.n++;
 (так короче всего. проверку на обьект
добавил ибо ругалось на короткий код )))*/

module.exports = { inc };
