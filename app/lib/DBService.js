'use strict';

const VError = require('verror');
const { Service } = require('egg');

/**
 * db base service
 *
 * @class DBService
 * @extends {Service}
 */
class DBService extends Service {
  /**
   *Creates an instance of DBService.
   * @param {Object} ctx   - context
   * @param {String} type  - 类型
   * @memberof DBService
   */
  constructor(ctx, type) {
    super(ctx);
    this.type = type;
  }

  /**
   * 通用的dbError
   *
   * @param {Object} error - error stack
   * @param {String} msg - error stack
   * @param {Object} query - error stack
   * @memberof DBService
   */
  dbError(error, msg, query) {
    const { EMONGODB } = this.ctx.errors;

    throw Object.assign(
      new VError(
        {
          name: EMONGODB,
          cause: error,
          info: query,
        },
        msg
      ),
      {
        code: 10002,
        status: 500,
      }
    );
  }

  /**
   * 通过ID查找
   *
   * @param {String} id - id
   * @param {String}  populate - 附带的信息
   * @return {Object} result
   * @memberof DBService
   */
  async findById(id, populate = '') {
    const query = Object.assign(
      {
        deleted_at: null,
      },
      {
        _id: id,
      }
    );

    const data = await this.ctx.model[this.type]
      .findOne(query)
      .populate(populate)
      .catch(error => {
        this.dbError(error, `${this.type}查询失败`, query);
      });

    return data;
  }

  /**
   * find one
   *
   * @param {Object} conditions - 条件
   * @param {String}  populate - 附带的信息
   * @return {Object} 查询结果
   * @memberof DBService
   */
  async findOne(conditions, populate = '') {
    const query = Object.assign(
      {
        deleted_at: null,
      },
      conditions
    );
    const data = await this.ctx.model[this.type]
      .findOne(query)
      .lean()
      .populate(populate)
      .catch(error => {
        this.dbError(error, `${this.type}查询失败`, query);
      });
    return data;
  }

  /**
   * find many
   *
   * @param {Object} conditions      - 条件
   * @param {Array} [fields=null]    - 字段
   * @param {Object} [options=null]  - options
   * @param {String}  populate - 附带的信息
   * @return {Array} results
   * @memberof DBService
   */
  async findMany(conditions, fields = null, options = {}, populate = '') {
    const query = Object.assign(
      {
        deleted_at: null,
      },
      conditions
    );
    const items = await this.ctx.model[this.type]
      .find(query, fields, options)
      .lean()
      .populate(populate)
      .catch(error => {
        this.dbError(error, `${this.type}查询失败`, query);
      });
    return items;
  }

  /**
   * find all
   *
   * @param {Object}  conditions - 条件
   * @param {String}  populate - 附带的信息
   * @return {Array}  results
   * @memberof DBService
   */
  async findAll(conditions, populate = '') {
    const query = Object.assign({}, conditions);
    const date = await this.ctx.model[this.type]
      .findOne(query)
      .populate(populate)
      .catch(error => {
        this.dbError(error, `${this.type}查询失败`, query);
      });
    return date;
  }

  /**
   * count
   *
   * @param {Object} options  - 条件
   * @return {Number} result
   * @memberof DBService
   */
  async count(options) {
    const query = Object.assign(
      {
        deleted_at: null,
      },
      options
    );
    const count = await this.ctx.model[this.type]
      .find(query)
      .count()
      .catch(error => {
        this.dbError(error, `${this.type}查询失败`, query);
      });
    return count;
  }

  /**
   * create
   *
   * @param {Object} data - insert data
   * @return {Object} result
   * @memberof DBService
   */
  async create(data) {
    const item = await this.ctx.model[this.type].create(data).catch(error => {
      this.dbError(error, `${this.type}创建失败`, data);
    });
    return item;
  }

  /**
   * insert many
   *
   * @param {Array} data - array data
   * @return {Array} results
   * @memberof DBService
   */
  async insertMany(data) {
    const item = await this.ctx.model[this.type]
      .insertMany(data)
      .catch(error => {
        this.dbError(error, `${this.type}插入数据失败`, data);
      });
    return item;
  }

  /**
   * update
   *
   * @param {Object} options            - option
   * @param {Object} values             - value
   * @param {boolean} [multiple=false]  - 是否多个
   * @param {boolean} [upsert=false]    - 是否更新插入
   * @return {Object} result
   * @memberof DBService
   */
  async update(options, values, multiple = false, upsert = false) {
    const items = await this.ctx.model[this.type]
      [multiple ? 'updateOne' : 'updateMany'](
        options,
        {
          $set: values,
        },
        {
          upsert,
        }
      )
      .catch(error => {
        this.dbError(error, `${this.type}数据更新失败`, values);
      });
    return items;
  }

  /**
   * destroy
   *
   * @param {Object} options              - options
   * @param {boolean} [multiple=false]    - 是否多个
   * @param {boolean} [force=false]       - 是否强制
   * @return {Object} result
   * @memberof DBService
   */
  async destroy(options, multiple = false, force = false) {
    let ret;
    if (force) {
      ret = await this.ctx.model[this.type]
        [multiple ? 'deleteOne' : 'deleteMany'](options)
        .catch(error => {
          this.dbError(error, `${this.type}数据删除失败`, options);
        });
    } else {
      ret = await this.ctx.model[this.type]
        [multiple ? 'updateOne' : 'updateMany'](
          options,
          {
            deleted_at: new Date(),
          },
          {
            multiple: true,
          }
        )
        .catch(error => {
          this.dbError(error, `${this.type}数据删除失败`, options);
        });
    }
    return ret;
  }
}
module.exports = DBService;
