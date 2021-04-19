'use strict';
const crypto = require('crypto');

module.exports = app => {
  /**
   * 小程序相关Controller
   *
   * @class miniProgramController
   * @extends {app.Controller}
   */
  class miniProgramController extends app.Controller {
    /**
     * 参数验证 - 获取小程序码
     *
     * @readonly
     * @memberof miniProgramController
     */
    get indexRule() {
      return {
        properties: {
          id: {
            $ref: 'schema.definition#/oid',
          },
        },
        required: ['id'],
        $async: true,
        additionalProperties: false,
      };
    }

    /**
     * 获取小程序码
     *
     * @return {promise} 生成的小程序码
     * @memberof miniProgramController
     */
    async code() {
      const { ctx, indexRule } = this;
      const { grantType, tokenUrl, codeUrl } = app.config.miniProgram;
      const { appid, secret } = app.config.wechat;
      const { uuid2tn } = ctx.service.wechat;
      const { id } = await ctx.verify(indexRule, ctx.params);

      const token = await app.curl(tokenUrl, {
        dataType: 'json',
        data: {
          grant_type: grantType,
          appid,
          secret,
        },
      });
      ctx.error(token.data.access_token, 23001, '小程序token获取失败');

      const url = `${codeUrl}?access_token=${token.data.access_token}`;
      const code = await app.curl(url, {
        method: 'POST',
        contentType: 'json',
        data: {
          page: 'pages/greetingcard/greetingcard',
          scene: uuid2tn(id),
        },
      });
      ctx.error(token.data.access_token, 23002, '小程序码获取失败');

      ctx.body = code.data;
      ctx.set({
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'max-age=8640000',
      });
    }

    /**
     * 参数验证 - 获取小程序码
     *
     * @readonly
     * @memberof miniProgramController
     */
    get phoneRule() {
      return {
        properties: {
          encryptedData: {
            type: 'string',
          },
          iv: {
            type: 'string',
          },
        },
        required: ['iv', 'encryptedData'],
        $async: true,
        additionalProperties: false,
      };
    }

    /**
     * 获取用户手机号
     *
     * @return {promise} 解码后的手机号
     * @memberof miniProgramController
     */
    async phone() {
      const { ctx, phoneRule } = this;
      const { token, user_id } = ctx.loginPermission();
      const { encryptedData, iv } = await ctx.verify(
        phoneRule,
        ctx.request.body
      );

      const isUserExist = await ctx.service.user.findById(user_id);
      ctx.error(isUserExist, 11004, '该用户不存在');
      const decodedData = this.decrypt(encryptedData, iv, token);
      const { phoneNumber } = decodedData;
      const { nModified } = await ctx.service.user.update(
        {
          _id: isUserExist._id,
        },
        {
          wechat_phone: phoneNumber,
        }
      );
      ctx.error(nModified === 1, 11008, '修改登录时间失败');
      ctx.jsonBody = {
        data: decodedData,
      };
    }

    /**
     * 数据揭秘函数
     *
     * @param {String} encryptedData - 加密后的用户数据
     * @param {String} iv            - iv
     * @param {String} token         - token
     * @return {String} 解密后数据
     * @memberof miniProgramController
     */
    decrypt(encryptedData, iv, token) {
      const { appid } = app.config.wechat;
      // base64 decode
      const sessionKey = new Buffer(token, 'base64');
      encryptedData = new Buffer(encryptedData, 'base64');
      iv = new Buffer(iv, 'base64');
      let decoded;
      try {
        // 解密
        const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
        // 设置自动 padding 为 true，删除填充补位
        decipher.setAutoPadding(true);
        decoded = decipher.update(encryptedData, 'binary', 'utf8');
        decoded += decipher.final('utf8');
        decoded = JSON.parse(decoded);
      } catch (err) {
        throw new Error('Illegal Buffer');
      }

      if (decoded.watermark.appid !== appid) {
        throw new Error('Illegal Buffer');
      }

      return decoded;
    }
  }
  return miniProgramController;
};
