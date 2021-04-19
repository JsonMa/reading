'use strict';
const Service = require('../lib/DBService');

/**
 * QuestionService
 * QuestionService
 *
 * @class QuestionService
 * @extends {Service}
 */
class QuestionService extends Service {

  /**
   *Creates an instance of QuestionService.
   * @param {Object} ctx - context
   * @memberof QuestionService
   */
  constructor(ctx) {
    super(ctx, 'Question');
  }
}

module.exports = QuestionService;
