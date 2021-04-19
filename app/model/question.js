'use strict';

const { timestamps } = require('../lib/model_common');

module.exports = ({ mongoose }) => {
  const { Schema } = mongoose;
  /**
   * Question
   *
   * @model Question
   * @namespace Model
   * @property {Number}  question.index     - 问题编号
   * @property {String}  question.title     - 问题标题
   * @property {String}  question.correct   - 正确答案
   * @property {Array}  question.options    - 选项列表
   */
  const schema = new Schema(
    {
      index: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      options: [
        {
          identifer: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
        },
      ],
      answer: {
        type: String,
        required: true,
      },
    },
    Object.assign({},
      {
        timestamps,
      }
    )
  );

  return mongoose.model('question', schema);
};
