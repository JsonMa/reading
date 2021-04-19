'use strict'

module.exports = () => {
  const exports = {};

  exports.keys = 'reading-server';

  exports.middleware = ['error', 'auth'];

  // 微信支付
  exports.wechat = {
    appid: 'wx9581c4d9757410d5', // 小程序appid
    mch_id: 1495285102, // 微信支付mchid
    trade_type: 'JSAPI',
    key: 'huayanxiaochengxu9090ERWEIMAHEKA', // 微信支付key
    secret: '92b786f99cf6c12435b9618333e8b74e', //小程序的 app secret
    grant_type: 'authorization_code', // token换取openid所需的
    openid_url: 'https://api.weixin.qq.com/sns/jscode2session', // openid获取地址
    unifiedorder_url: 'https://api.mch.weixin.qq.com/pay/unifiedorder' // 统一下单接口地址
  };

  // 小程序api
  exports.miniProgram = {
    grantType: 'client_credential',
    tokenUrl: 'https://api.weixin.qq.com/cgi-bin/token',
    codeUrl: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit'
  };

  exports.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/reading',
      options: {}
    }
  };

  exports.redis = {
    client: {
      port: 6379,
      host: 'localhost',
      password: '',
      db: 0
    }
  };

  exports.security = {
    csrf: {
      enable: false,
      ignoreJSON: true // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    }
  };

  exports.siteFile = {
    '/favicon.ico': '/static/favicon.ico'
  };

  exports.static = {
    prefix: '/page/reading',
  };

  exports.onerror = {
    html(err) {
      this.body = this.renderError(err);
      this.status = err.status;
    }
  };

  exports.logger = {
    disableConsoleAfterReady: false
  };

  exports.host = 'https://buildupstep.cn';

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  return exports;
};
