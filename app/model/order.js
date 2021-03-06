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
   * 订单Model
   *
   * @model Order
   * @namespace Model
   * @property {String}   openid           - 答题人
   * @property {String}   name             - 收货人
   * @property {String}   phone            - 手机号码
   * @property {String}   area             - 所在地区
   * @property {String}   address          - 详细地址
   * @property {Object}   record           - 答题记录
   * @property {Object}   reward           - 奖品等级
   * @property {Object}   desc             - 奖品名称
   * @property {Object}   time             - 订单时间
   */
  const schema = new Schema({
    openid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    record: {
      type: Schema.Types.ObjectId,
      ref: 'record',
    },
    reward: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    time: Date,
  },
  Object.assign({}, {
    timestamps,
  })
  );

  return mongoose.model('order', schema);
};
