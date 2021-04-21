'use strict';
const {
  timestamps,
} = require('../lib/model_common');

module.exports = ({
  mongoose,
}) => {
  const {
    Schema,
  } = mongoose;

  /**
   * 用户Model
   *
   * @model User
   * @namespace Model
   *
   * @param {String}   openid                          - 微信用户唯一识别号
   * @param {String}   reward                          - 获奖状态
   * @param {Date}     last_login                      - 最近登录时间
   */

  const schema = new Schema({
    openid: {
      type: String,
      required: true,
    },
    reward: {
      type: String,
      enum: ['0', '1', '2', '3'],
      default: '0',
    },
    last_login: Date,
  },
  Object.assign({}, {
    timestamps,
  })
  );

  return mongoose.model('user', schema);
};
