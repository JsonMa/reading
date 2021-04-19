'use strict';

const { VError } = require('verror');

module.exports = () =>
  function* (next) {
    try {
      yield next;
    } catch (e) {
      if (e.name === 'AJV_ERROR') {
        this.body = {
          code: 400,
          msg: e.jse_shortmsg,
          errors: e.jse_info,
        };
        this.status = 400;
      } else if (e instanceof VError) {
        this.body = {
          code: e.code,
          msg: e.message,
          errors: e.stack,
        };
        this.status = e.status || 200;
      } else {
        // http error caused by ctx.assert || assert
        this.body = {
          code: 10001,
          msg: e.message || '服务器内部错误',
          errors: e.stack,
        };
        this.status = e.status || 500;
      }
    }
  };
