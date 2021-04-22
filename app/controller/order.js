'use strict';

const xlsx = require('node-xlsx');
const moment = require('moment');
module.exports = app => {
  /**
   * Order相关路由
   *
   * @class OrderController
   * @extends {app.Controller}
   */
  class OrderController extends app.Controller {
    /**
     * create order 的参数规则
     *
     * @readonly
     * @memberof OrderController
     */
    get createRule() {
      return {
        properties: {
          record_id: {
            $ref: 'schema.definition#/oid',
          },
          reward: {
            type: 'string',
            enum: ['1', '2', '3'],
          },
          name: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          area: {
            type: 'string',
          },
          address: {
            type: 'string',
          },
        },
        required: ['record_id', 'reward', 'name', 'phone', 'area', 'address'],
        $async: true,
        additionalProperties: false,
      };
    }

    /**
     * create order
     *
     * @memberof OrderController
     * @return {promise} Order
     */
    async create() {
      const { createRule, ctx } = this;
      const { openid } = ctx.loginPermission();
      const { record_id, reward, name, phone, area, address } = await ctx.verify(createRule, ctx.request.body);
      const user = await ctx.service.user.findOne({ openid });
      ctx.error(user.reward === '0', 12005, '您已经领过奖品，不能重复领奖');
      const record = await ctx.service.record.findById(record_id);
      ctx.error(record.openid === openid, 12000, '非自己的问卷不能领奖');
      ctx.error(!record.isEnd, 12004, '已关闭的问卷不能领奖');
      ctx.error(record[`level${reward}Score`] === 10, 12001, '未完成问卷不能领奖');
      ctx.error(record.totalScore === parseInt(reward) * 10, 12001, '未完成问卷不能领奖');

      const lockBeginTime = Date.now();
      let isTimeOut = false;
      const handler = function() {
        return new Promise(resolve => {
          const timer = setInterval(async () => {
            let result = 0;
            if (!isTimeOut) result = await ctx.app.redis.setnx('lock', 'key');
            if (result) {
              clearInterval(timer);
              await ctx.app.redis.expire('lock', 5); // 锁过期时间5s
              const commodities = await ctx.service.commodity.findMany({}, null, {
                sort: {
                  index: 'asc',
                },
              });
              let targetReward = parseInt(reward);
              const hashCommodities = {};
              commodities.forEach(commodity => {
                hashCommodities[commodity.index] = commodity;
              });
              const getCommodity = function(reward) {
                const commodity = hashCommodities[reward];
                if (commodity.count > 0) return commodity;
                targetReward -= 1;
                if (targetReward >= 1) {
                  return getCommodity(targetReward);
                } return false;
              };
              const targetCommodity = getCommodity(targetReward);
              ctx.error(targetCommodity, 12002, '很遗憾，奖品已领取完毕');

              await ctx.service.commodity.update({
                index: targetCommodity.index,
              }, {
                count: targetCommodity.count - 1,
              }); // 减库存
              await ctx.app.redis.expire('lock', 0); // 锁立即过期
              await ctx.service.order.create({
                openid,
                name,
                phone,
                area,
                address,
                record: record._id,
                time: Date.now(),
                reward: targetCommodity.level,
                desc: targetCommodity.name,
              }); // 新增订单记录
              await ctx.service.record.update({
                _id: record._id,
              }, {
                reward,
                isEnd: true,
              }); // 修改问卷状态
              await ctx.service.user.update({ openid }, { reward: targetCommodity.index });

              resolve(targetCommodity);
            }
            if (Date.now() - lockBeginTime >= 60000) {
              isTimeOut = true;
              clearInterval(timer);
              ctx.error(false, 12003, '奖品领取失败，请重新领取');
            }
            ctx.logger.info('等待获取锁');
          }, 1); // 获取锁
        });
      };

      const targetCommodity = await handler();
      ctx.jsonBody = {
        data: {
          level: targetCommodity.level,
          name: targetCommodity.name,
        },
      };
    }

    /**
     * list rule
     *
     * @readonly
     * @memberof UserController
     */
    get indexRule() {
      return {
        properties: {
          ...this.ctx.helper.pagination.rule,
        },
        $async: true,
        additionalProperties: false,
      };
    }

    /**
     * list orders
     *
     * @memberof OrderController
     * @return {promise} Order List
     */
    async index() {
      const { ctx, indexRule } = this;
      ctx.checkAdminPermission();
      const { generateSortParam } = ctx.helper.pagination;
      const {
        limit = 10,
        offset = 0,
        sort = '-created_at',
      } = await ctx.verify(indexRule, ctx.request.query);
      const orders = await ctx.service.order.findMany(
        {},
        null, {
          limit: parseInt(limit),
          skip: parseInt(offset),
          sort: generateSortParam(sort),
        }
      );
      const count = await ctx.service.order.count({});
      ctx.jsonBody = {
        data: orders,
        meta: {
          limit,
          offset,
          sort,
          count,
        },
      };
    }

    /**
     * excel rule
     *
     * @readonly
     * @memberof UserController
     */
    get excelRule() {
      return {
        properties: {
          token: {
            type: 'string',
          },
        },
        $async: true,
        required: ['token'],
        additionalProperties: false,
      };
    }

    /**
     * order excel
     *
     * @memberof OrderController
     * @return {promise} Order List
     */
    async excel() {
      const { ctx, excelRule } = this;
      const { token } = await ctx.verify(excelRule, ctx.request.query);
      ctx.error(token === 'gxq@123456', 12006, '无订单导出权限');
      const orders = await ctx.service.order.findMany({}, null, {
        sort: {
          time: -1,
        },
      });
      const data = [['微信ID', '奖品等级', '奖品名称', '联系人', '联系电话', '所在城市', '详细地址', '答题时间']];
      const levelHash = {
        level1: '三等奖',
        level2: '二等奖',
        level3: '一等奖',
      };
      orders.forEach(order => {
        data.push([order.openid, levelHash[order.reward], order.desc, order.name, order.phone, order.area, order.address, moment(order.time).toString()]);
      });
      const buffer = xlsx.build([{ name: '中奖名单', data }]);
      ctx.attachment('阅读月活动中奖名单.xlsx');
      ctx.set('Content-Type', 'application/octet-stream');
      ctx.body = buffer;
    }

    /**
     * inner order
     *
     * @memberof OrderController
     * @return {promise} Order List
     */
    async inner() {
      const { ctx, excelRule } = this;
      const { token } = await ctx.verify(excelRule, ctx.request.query);
      ctx.error(token === 'gxq_inner@123456', 12007, '无操作权限');
      const { innerUsers } = ctx.app.config; // 内部用户信息

      // 为内部用户生成试卷
      const questionaire = {};
      const selected_questions = await this.ctx.model.Question.aggregate([
        { $sample: { size: 30 } },
      ]);
      ['level1', 'level2', 'level3'].forEach((item, index) => {
        questionaire[item] = selected_questions.slice(10 * index, 10 * (index + 1));
      });
      const oidFilter = function(items) {
        return items.map(item => {
          return item._id.toString();
        });
      };
      const level1_ids = oidFilter(questionaire.level1);
      const level2_ids = oidFilter(questionaire.level2);
      const level3_ids = oidFilter(questionaire.level3);

      // 数据构造
      const users = [];
      const records = [];
      const orders = []; // 订单
      innerUsers.forEach(user => {
        users.push({
          reward: user.level === 'level2' ? '2' : '3',
          openid: user.openid,
          last_login: new Date(),
        });
        records.push({
          openid: user.openid,
          level1: level1_ids,
          level2: level2_ids,
          level3: level3_ids,
          level1Score: 10,
          level2Score: 10,
          level3Score: user.level === 'level2' ? 0 : 10,
          totalScore: user.level === 'level2' ? 20 : 30,
          isEnd: true,
          time: Date.now(),
          reward: user.level === 'level2' ? '2' : '3',
        });
      });
      await ctx.app.model.User.insertMany(users); // 插入用户信息
      const recordsResp = await ctx.app.model.Record.insertMany(records); // 插入多条答题记录
      recordsResp.forEach(record => {
        innerUsers.forEach(user => {
          if (record.openid === user.openid) {
            orders.push({
              openid: user.openid,
              name: user.rawName, // fake name
              phone: user.phone,
              area: user.area,
              address: user.address,
              record: record._id,
              time: Date.now(),
              reward: user.level === 'level2' ? 'level2' : 'level3',
              desc: user.level === 'level2' ? '海兰云天温泉券' : '海兰云天酒店住宿券',
            });
          }
        });
      });

      // 获取商品信息
      const commodities = await ctx.service.commodity.findMany({}, null, {
        sort: {
          index: 'asc',
        },
      });
      const hashCommodities = {};
      commodities.forEach(commodity => {
        hashCommodities[commodity.index] = commodity;
      });

      // 减库存
      await ctx.service.commodity.update({
        index: 3,
      }, {
        count: hashCommodities[3].count - 1,
      });
      await ctx.service.commodity.update({
        index: 2,
      }, {
        count: hashCommodities[2].count - 4,
      });

      // 插入订单信息
      await ctx.app.model.Order.insertMany(orders);
      ctx.body = { code: 0, msg: 'success' };
    }

    /**
     * inner order
     *
     * @memberof OrderController
     * @return {promise} Order List
     */
    async timer() {
      const { ctx, excelRule } = this;
      const { token } = await ctx.verify(excelRule, ctx.request.query);
      ctx.error(token === 'gxq_inner@123456', 12007, '无操作权限');
      const { innerUsers } = ctx.app.config; // 内部用户信息
      for (let i = 0; i < innerUsers.length; i++) {
        const user = innerUsers[i];
        await ctx.app.model.Order.update({
          openid: user.openid,
        }, {
          name: user.name, // real name
          time: Date.now() + 86400000 + 3600000 * (i + 1) + 60000 * (i + 3) + 1000 * (i + 1),
        });
      }
      ctx.body = { code: 0, msg: 'success' };
    }
  }
  return OrderController;
};
