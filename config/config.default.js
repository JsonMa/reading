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
      options: {
        user: 'reading',
        pass: 'reading123456',
      }
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

  exports.innerUsers = [
      {
        openid:  'oVUI94-Ud7W2JkJHOkLrzooxqKdc',
        level: 'level3',
        name: '邹华',
        phone: '13896104008',
        area: '重庆市渝北区',
        address: '礼嘉华侨城天际湾'
      },
      {
        openid:  'oVUI941XyLHnR-C6w4ejol4LqgUo',
        level: 'level2',
        name: '马号',
        phone: '13896120331',
        area: '重庆市大足区',
        address: '龙岗街道下坡巷'
      },
      {
        openid:  'oVUI9439oilQbfqtyNAqAEaeYJJA',
        level: 'level2',
        name: '陈沉',
        phone: '13617672156',
        area: '重庆市渝北区',
        address: '黄泥磅佳华北宸里2栋'
      },
      {
        openid:  'oVUI947ftlB95qN-7oqZOH_yLACc',
        level: 'level3',
        name: '马姣',
        phone: '15922918496',
        area: '重庆市南岸区',
        address: '光电路30号双子星座'
      },
      {
        openid:  'oVUI94yaEDe7O8pJWmt9qRfXSLjs',
        level: 'level2',
        name: '程成',
        phone: '15213358479',
        area: '重庆市沙坪坝区',
        address: '财信沙滨城市'
      }
    ]

  exports.questions = {
    chance: 5,
  };

  return exports;
};
