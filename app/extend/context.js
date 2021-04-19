'use strict';

const { VError } = require('verror');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

module.exports = {
  get jsonBody() {
    return this.body;
  },

  /**
   * 设置通用返回格式的body
   *
   * @param {object} obj - 实际返回数据
   *
   */
  set jsonBody(obj) {
    let data = obj ? obj.data : {};
    obj = obj || {};
    const { meta = {}, embed = {} } = obj;

    if (_.isObject(obj) && !Reflect.has(obj, 'meta') && !Reflect.has(obj, 'embed')) {
      data = obj;
    }
    this.set('Content-Type', 'application/json');
    this.body = {
      code: 0,
      msg: 'success',
      data,
      ...(obj
        ? {
          meta,
          embed,
          data,
        }
        : {}),
    };
  },

  error(expression, code, message, httpStatus, stack) {
    if (typeof expression !== 'number' && expression) return;
    if (typeof expression === 'number') {
      stack = httpStatus;
      httpStatus = message;
      message = code;
      code = expression;
    }
    this.assert(message && typeof message === 'string');
    this.assert(code && typeof code === 'number');
    if (stack) this.assert(stack instanceof Error, 'stack需为Error类型', 500);

    const err = Object.assign(
      new VError(
        {
          name: 'CONTEXT_ERROR',
          ...(stack ? stack : {}),
        },
        message
      ),
      {
        code,
        status: httpStatus || 200,
      }
    );

    this.throw(err);
  },

  async verify(rule, params) {
    const ret = await this.validate(rule, params).catch(function(e) {
      throw new VError(
        {
          name: 'AJV_ERROR',
          cause: e,
          info: e.errors
            ? e.errors.reduce((map, e) => {
              map[e.keyword] = e.message;
              return map;
            })
            : e.message,
        },
        '错误的请求参数'
      );
    });
    return ret;
  },

  /**
   * 检查用户权限, 检查失败直接抛出403异常
   *
   * @return {undefined}
   */
  checkAdminPermission() {
    this.error(this.state.auth, 10001, 'access_token已过期，请从新登陆', 403);
    const { isAdmin } = this.state.auth;
    this.error(
      isAdmin,
      10003,
      '非管理员无权访问该接口',
      403
    );
    return this.state.auth;
  },

  /**
   * 检查登陆的用户是否是被请求的用户
   *
   * @param {String} id - 用户ID
   * @return {object} - auth对象
   */
  oneselfPermission(id) {
    this.error(this.state.auth, 10001, 'access_token已过期，请从新登陆', 403);
    const { openid } = this.state.auth;
    this.error(id === openid, 10005, '只能操作自身权限相关的接口', 403);
    return this.state.auth;
  },

  /**
   * 检查用户是否登陆
   *
   * @return {object} - auth对象
   */
  loginPermission() {
    this.error(this.state.auth, 10001, 'access_token已过期，请从新登陆', 403);
    return this.state.auth;
  },

  /**
   * 渲染文件
   *
   * @param {string} file 文件路径
   * @return {steam} 文件流
   */
  render(file) {
    /* istanbul ignore next */
    this.type = 'html';
    return fs.createReadStream(path.join(this.app.baseDir, 'app/public', file));
  },

  /**
   * 渲染error
   *
   * @param {object} err 错误信息
   * @return {Buffer} error buffer
   */
  renderError(err) {
    const { message = '服务器内部错误', status = 500 } = err;
    const errorView = this.app.errorTemplate
      .replace(/{{ error_status }}/gi, status)
      .replace(/{{ error_message }}/gi, message);
    return Buffer.from(errorView);
  },

  get errors() {
    return {
      EMONGODB: 'MONGO_ERROR',
    };
  },
};
