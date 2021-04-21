'use strict';

const uuidv4 = require('uuid/v4');

module.exports = app => {
  /**
   * Auth 相关路由
   *
   * @class AuthController
   * @extends {app.Controller}
   */
  class AuthController extends app.Controller {
    /**
     * login 的参数规则
     *
     * @readonly
     * @memberof AuthController
     */
    get loginRule() {
      return {
        properties: {
          code: {
            type: 'string',
          },
        },
        required: ['code'],
        $async: true,
        additionalProperties: false,
      };
    }

    /**
     * logger
     *
     * @readonly
     * @memberof AuthController
     */
    get logger() {
      const handler = {
        get(target, attrName) {
          if (attrName in target) {
            return target[attrName].bind(target, '[AuthController]');
          }
        },
      };
      return new Proxy(this.ctx.logger, handler);
    }

    /**
     * login
     *
     * @memberof AuthController
     * @return {Object} user & token
     */
    async login() {
      const { ctx, loginRule } = this;
      const { code } = await ctx.verify(loginRule, ctx.request.body);
      const {
        openid,
        session_key,
        expires_in,
        errcode,
        errmsg,
      } = await this.code2Session(code); // code换取用户信息
      ctx.error(!errcode, 10002, errmsg); // 获取openid
      let user = await ctx.service.user.findOne({
        openid,
      }); // 验证该openid下的用户是否存在
      if (user) {
        const { nModified } = await ctx.service.user.update(
          {
            openid,
          },
          {
            last_login: new Date(),
          }
        );
        ctx.error(nModified > 0, 11008, '修改登录时间失败');
      } else {
        user = await ctx.service.user.create({
          openid,
          last_login: new Date(),
        });
      }
      const access_token = uuidv4();
      const sessionData = {
        openid,
        user_id: user._id,
        session_key,
        last_login: user.last_login,
      };
      await ctx.app.redis.set(
        `token:${access_token}`,
        JSON.stringify(sessionData),
        'EX',
        expires_in || 3600 // 单位为秒
      );
      ctx.cookies.set('access_token', access_token, {
        signed: false,
        httponly: false,
        overwirte: true,
      });
      ctx.jsonBody = {
        data: {
          token: access_token,
          user: {
            reward: user.reward,
            openid: user.openid,
            last_login: user.last_login,
            created_at: user.created_at,
          },
        },
      };
    }

    /**
     * adminLogin
     *
     * @memberof AuthController
     * @return {object} 返回登出结果
     */
    async admin() {
      const { ctx, loginRule } = this;
      const { code } = await ctx.verify(loginRule, ctx.request.body);
      const isAdmin = code === 'gxq@123456';
      ctx.error(isAdmin, 11010, '秘钥错误,请检查您的秘钥');
      const access_token = uuidv4();
      await ctx.app.redis.set(
        `token:${access_token}`,
        JSON.stringify({ isAdmin }),
        'EX',
        3600 // 单位为秒
      );
      ctx.cookies.set('access_token', access_token, {
        signed: false,
        httponly: false,
        overwirte: true,
      });
      ctx.jsonBody = {
        data: {
          token: access_token,
        },
      };
    }

    /**
     * logout
     *
     * @memberof AuthController
     * @return {object} 返回登出结果
     */
    async logout() {
      const { ctx } = this;
      const { access_token: token } = ctx.header;

      const ret = await ctx.app.redis.del(`token:${token}`);
      ctx.error(ret === 1, 11009, '退出登录失败');
      ctx.cookies.set('access_token', '', {
        signed: false,
        maxAge: 0,
      }); // 清除access_token
      ctx.jsonBody = null;
    }

    /**
     * code2Session
     *
     * @param {string} code - login codee
     * @return {promise} session data
     * @memberof AuthController
     */
    async code2Session(code) {
      if (code === 'gxq@123456') {
        return {
          openid: 'gxq@123456',
          session_key: uuidv4(),
        };
      } // 测试账号登录
      const { ctx } = this;
      const config = ctx.app.config.wechat;
      ctx.assert(typeof code === 'string', 'code需为字符串', 400);
      const { data } = await ctx.curl(
        'https://api.weixin.qq.com/sns/jscode2session',
        {
          method: 'GET',
          data: {
            appid: config.appid,
            secret: config.secret,
            js_code: code,
            grant_type: config.grant_type,
          },
          dataType: 'json',
        }
      );
      const { errcode, errmsg } = data;
      if (errcode) {
        this.logger.error(`[code2Session] - code: ${errcode}, msg: ${errmsg}`);
      }
      return data;
    }
  }
  return AuthController;
};
