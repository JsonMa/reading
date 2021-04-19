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
   * 答题记录Model
   *
   * @model Record
   * @namespace Model
   *
   * @param {String}   openid                          - 用户唯一识别号
   * @param {Array}    level1                          - 第一关题目
   * @param {Array}    level2                          - 第二关题目
   * @param {Array}    level3                          - 第三关题目
   * @param {Number}   score                           - 分数
   * @param {String}   reward                          - 奖励['0'未获奖, '1'一等奖, '2'二等奖, '3'三等奖],
   * @param {Date}     time                            - 最近答题时间
   * @param {Date}     isEnd                           - 是否已结束
   */

  const schema = new Schema({
    openid: {
      type: String,
      required: true,
    },
    level1: [{
      type: Schema.Types.ObjectId,
      ref: 'question',
    }],
    level2: [{
      type: Schema.Types.ObjectId,
      ref: 'question',
    }],
    level3: [{
      type: Schema.Types.ObjectId,
      ref: 'question',
    }],
    level1Score: {
      type: Number,
      default: 0,
    },
    level2Score: {
      type: Number,
      default: 0,
    },
    level3Score: {
      type: Number,
      default: 0,
    },
    totalScore: {
      type: Number,
      default: 0,
    },
    isEnd: {
      type: Boolean,
      default: false,
    },
    reward: {
      type: String,
      enum: ['0', '1', '2', '3'],
      default: '0',
    },
    time: Date,
  },
  Object.assign({}, {
    timestamps,
  })
  );

  return mongoose.model('record', schema);
};
