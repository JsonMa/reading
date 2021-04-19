'use strict';

module.exports = app => {
  /**
   * User 相关路由
   *
   * @class UserController
   * @extends {app.Controller}
   */
  class UserController extends app.Controller {
    /**
     * 获取用户列表
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
     * 参数规则-用户详情
     *
     * @readonly
     * @memberof UserController
     */
    get showRule() {
      return {
        properties: {
          openid: {
            type: 'string',
          },
        },
        required: ['openid'],
        $async: true,
        additionalProperties: false,
      };
    }

    /**
     * 获取全部用户列表
     *
     * @memberof UserController
     * @return {promise} 用户列表
     */
    async index() {
      const {
        ctx,
        indexRule,
      } = this;
      const {
        generateSortParam,
      } = ctx.helper.pagination;
      ctx.checkAdminPermission(); // 校验是否为管理员

      const {
        limit = 10,
        offset = 0,
        sort = '-created_at',
      } = await ctx.verify(indexRule, ctx.request.query);

      const users = await ctx.service.user.findMany({}, null, {
        limit: parseInt(limit),
        skip: parseInt(offset),
        sort: generateSortParam(sort),
      });
      const count = await ctx.service.user.count({});

      ctx.jsonBody = {
        data: users,
        meta: {
          limit,
          offset,
          sort,
          count,
        },
      };
    }

    /**
     * 用户答题信息
     *
     * @memberof UserController
     * @return {undefined}
     */
    async statistics() {
      const { ctx } = this;
      const { openid } = ctx.loginPermission(); // 校验是否有查询自身的权限

      const records = await ctx.service.record.findMany({
        openid,
      });
      ctx.jsonBody = {
        data: {
          records,
        },
      };
    }
  }
  return UserController;
};
