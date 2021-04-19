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
   * 商品Model
   *
   * @model Commodity
   * @namespace Model
   * @property {String}   level            - 商品等级
   * @property {String}   name             - 商品名称
   * @property {Number}   count            - 商品数量
   */
  const schema = new Schema({
    index: {
      type: String,
      required: true,
      enum: ['1', '2', '3'],
    },
    level: {
      type: String,
      required: true,
      enum: ['level1', 'level2', 'level3'],
    },
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  Object.assign({}, {
    timestamps,
  })
  );

  return mongoose.model('commodity', schema);
};
