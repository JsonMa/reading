'use strict';

// @ts-nocheck
const _ = require('lodash');
const assert = require('assert');
const Promise = require('bluebird');
const stock = require('./assets/question_stock');

/**
 *
 * 初始化model, 并注入其依赖项
 *
 * @class Initiater
 */
module.exports = class Initiater {
  /**
   * Creates an instance of Initiater.
   * @memberof Initiater
   *
   * @param {App} app - Egg Application
   */
  constructor(app) {
    this.app = app;
    this.values = {};
  }

  /**
   * 删除injected的models
   *
   * @return {Promise} 任务
   */
  destory() {
    const values = _.assign(this.values);
    this.values = {};
    return Promise.all(Object.keys(values)
      .map(key => this.app.model[_.upperFirst(_.camelCase(key))]
        .destroy({
          where: {
            id: {
              $in: values[key].map(item => item.id),
            },
          },
          force: true,
        })));
  }

  /**
   * 注入models
   *
   * @param {any} [models=['order', 'address', 'commodity', 'commodity_category', 'post',
   * 'post_category', 'post_comment', 'post_hits', 'post_vote', 'sensitive_word', 'file']]
   * - 需要初始化的model
   * @memberof Initiater
   * @return {Promise} 注入model的Map, Promise<Map>
   */
  inject(models = []) {
    return this._injectDependences(['user', ...models]);
  }

  /**
   *
   *
   * @param {any} [models=['order', 'address', 'commodity', 'commodity_category', 'post',
   * 'post_category', 'post_comment', 'post_hits', 'post_vote', 'sensitive_word', 'file']]
   * - 需要初始化的model
   * @memberof Initiater
   * @return {Promise} 注入model的Map, Promise<Map>
   */
  _injectDependences(models = []) {
    return Promise.mapSeries(models, async key => {
      if (this.values[key]) return;
      const value = await this[`_inject${_.upperFirst(_.camelCase(key))}`]();
      assert(_.isArray(value), 'value must be format of array!');
      this.values[key] = value;
    });
  }

  /**
   *
   *
   * @param {any} model       - 需要获取的model
   * @param {any} [limit={}]  - 需要匹配的条件，key-value
   * @return {Promise} 匹配的model
   * @memberof Initiater
   */
  _getRandomItem(model, limit = {}) {
    const target = this.values[model];
    assert(target, `dependences '${model}' are required !`);

    if (_.isArray(target)) {
      const arr = target.slice();
      if (!limit) {
        return _.sample(arr);
      }
      while (arr) {
        const item = arr.pop();
        if (_.isMatch(item, limit)) {
          return item;
        }
      }
      assert(false, `can not find injected model of ${model}`);
    }

    return assert(false, 'unsupport type of model!');
  }

  /**
   * 注入user
   *
   * @return {Promise} 已注入的users, Promise<Array<User>>
   * @memberof Initiater
   */
  _injectUser() {
    return this.app.model.User.insertMany([{
      openid: 'gxq@123456',
      phone: '13896120331',
      last_login: new Date(),
    }]);
  }

  /**
   * 注入commodity
   *
   * @return {Promise} 已注入的commodities, Promise<Array<Commodity>>
   * @memberof Initiater
   */
  _injectCommodity() {
    return this.app.model.Commodity.insertMany([{
      index: 1,
      level: 'level1',
      name: '巴福刺绣书签',
      count: 500,
    },
    {
      index: 2,
      level: 'level2',
      name: '海兰云天温泉券',
      count: 100,
    },
    {
      index: 3,
      level: 'level3',
      name: '海兰云天酒店住宿券',
      count: 20,
    }]);
  }

  /**
   * 注入question
   *
   * @return {Promise} 已注入的questions, Promise<Array<Question>>
   * @memberof Initiater
   */
  _injectQuestion() {
    return this.app.model.Question.insertMany(stock);
  }
};
