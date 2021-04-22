'use strict';
const moment = require('moment');

module.exports = app => {
  /**
   * 问卷Controller
   *
   * @class QuestionController
   * @extends {app.Controller}
   */
  class QuestionController extends app.Controller {
    /**
     * 发试卷
     *
     * @memberof QuestionController
     * @return {array} 问卷
     */
    async index() {
      const { ctx } = this;
      const isUnittest = ctx.app.env === 'unittest';
      const { openid } = ctx.loginPermission();
      const chance = ctx.app.config.questions.chance;
      // 判断活动是否开始
      ctx.error(moment() > moment('2021-04-17T23:59:59'), 11000, '活动未开始！');
      ctx.error(moment() < moment('2021-04-24T23:59:59'), 11001, '活动已结束！');

      // 判断是否具备答题条件
      const currentTime = new Date();
      const startDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
      const endDate = new Date(startDate.getTime() + 86400000);
      const records = await ctx.service.record.findMany({
        openid,
        time: {
          $gte: startDate,
          $lt: endDate,
        },
      });
      ctx.error(records && records.length < chance, 11002, `今日答题次数已超过${chance}次,请明天再来吧！`);

      // 随机获取30道题目
      const questionaire = {}; // 生成试卷
      const selected_questions = await this.ctx.model.Question.aggregate([
        { $sample: { size: 30 } },
      ]);
      // const selected_questions = raw_questions.map(question => {
      //   ['answer', 'created_at', 'updated_at', 'index'].forEach(item => {
      //     if (isUnittest && item === 'answer') return;
      //     delete question[item];
      //   });
      //   return question;
      // }); // 数据过滤
      ['level1', 'level2', 'level3'].forEach((item, index) => {
        questionaire[item] = selected_questions.slice(10 * index, 10 * (index + 1));
      });

      // 增加答题记录
      const oidFilter = function(items) {
        return items.map(item => {
          return item._id.toString();
        });
      };
      const level1_ids = oidFilter(questionaire.level1);
      const level2_ids = oidFilter(questionaire.level2);
      const level3_ids = oidFilter(questionaire.level3);
      const record = await ctx.service.record.create({
        openid,
        level1: level1_ids,
        level2: level2_ids,
        level3: level3_ids,
        time: Date.now(),
      });
      questionaire.id = record._id;
      ctx.error(record, 11003, '问卷生成失败');
      const leftChance = chance - records.length - 1; // 剩余机会
      questionaire.left_chance = leftChance >= 0 ? leftChance : 0;

      await ctx.app.redis.set(`questionaire:${questionaire.id}`, JSON.stringify({
        level1: level1_ids,
        level2: level2_ids,
        level3: level3_ids,
      })); // 问题列表缓存

      ctx.jsonBody = {
        data: questionaire,
      };
    }

    /**
     * 查看剩余次数
     *
     * @memberof QuestionController
     * @return {array} 问卷
     */
    async chance() {
      const { ctx } = this;
      const { openid } = ctx.loginPermission();
      // 判断活动是否开始
      ctx.error(moment() > moment('2021-04-17T23:59:59'), 11000, '活动未开始！');
      ctx.error(moment() < moment('2021-04-24T23:59:59'), 11001, '活动已结束！');

      // 判断是否具备答题条件
      const currentTime = new Date();
      const startDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
      const endDate = new Date(startDate.getTime() + 86400000);
      const records = await ctx.service.record.findMany({
        openid,
        time: {
          $gte: startDate,
          $lt: endDate,
        },
      });
      const leftChance = ctx.app.config.questions.chance - records.length; // 剩余机会
      ctx.jsonBody = {
        data: {
          chance: leftChance,
        },
      };
    }

    /**
     * 参数规则-提交问题
     *
     * @readonly
     * @memberof CommodityController
     */
    get answerRule() {
      return {
        properties: {
          level_type: {
            type: 'string',
            enum: ['level1', 'level2', 'level3'],
          },
          id: {
            $ref: 'schema.definition#/oid',
          },
          question_id: {
            type: 'string',
          },
          question_value: {
            type: 'string',
            maxLength: 1,
          },
        },
        required: ['level_type', 'id', 'question_id', 'question_value'],
        $async: true,
        additionalProperties: false,
      };
    }

    /**
     * 提交问题答案
     *
     * @memberof QuestionController
     * @return {object} 指定问题答案
     */
    async answer() {
      const { ctx, service, answerRule } = this;
      const { id: questionaire_id, level_type, question_id, question_value } = await ctx.verify(answerRule, Object.assign(ctx.request.body, ctx.params));
      const { openid } = ctx.loginPermission();

      // 校验是否在
      const questionaireString = await ctx.app.redis.get(`questionaire:${questionaire_id}`); // 获取问题列表缓存
      ctx.error(questionaireString, 11004, '未找到该问卷');
      const levelQuestions = JSON.parse(questionaireString)[level_type];
      ctx.error(levelQuestions.includes(question_id), 11005, '问卷及题目不匹配');

      // 是否答题结束
      const record = await ctx.service.record.findById(questionaire_id);
      ctx.error(record.openid === openid, 11006, '非自己的问卷不可进行答题操作');
      ctx.error(!record.isEnd, 11007, '该问卷已结束');

      // 校验答案是否正确
      const question = await ctx.service.question.findById(question_id);
      if (question.answer !== question_value) {
        await service.record.update({
          _id: questionaire_id,
        }, { isEnd: true }); // 结束答题
        ctx.error(false, 11008, question.answer); // 返回正确答案
      } else {
        const targetData = { totalScore: record.totalScore + 1 };
        targetData[`${level_type}Score`] = record[`${level_type}Score`] + 1;
        await service.record.update({
          _id: questionaire_id,
        }, targetData); // 更新统计分数
        ctx.jsonBody = {
          data: question.answer,
        };
      }
    }

    /**
     * 参数规则-提交问题
     *
     * @readonly
     * @memberof CommodityController
     */
    get closeRule() {
      return {
        properties: {
          id: {
            $ref: 'schema.definition#/oid',
          },
          question_id: {
            type: 'string',
          },
        },
        required: ['id', 'question_id' ],
        $async: true,
        additionalProperties: false,
      };
    }

    /**
     * 关闭问卷
     *
     * @memberof QuestionController
     * @return {object} 指定问卷
     */
    async close() {
      const { ctx, service, closeRule } = this;
      const { id: questionaire_id, question_id } = await ctx.verify(closeRule, Object.assign(ctx.request.body, ctx.params));
      const { openid } = ctx.loginPermission();

      const record = await ctx.service.record.findById(questionaire_id);
      ctx.error(!record.isEnd, 11009, '不能关闭已结束的问卷');
      ctx.error(record.openid === openid, 11010, '不能关闭非自己的问卷');

      // 校验答案是否正确
      const question = await ctx.service.question.findById(question_id);
      await service.record.update({
        _id: questionaire_id,
      }, { isEnd: true });
      ctx.jsonBody = {
        data: question.answer,
      };
    }
  }

  return QuestionController;
};
