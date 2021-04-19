'use strict';
const Service = require('../lib/DBService');

/**
 * Record Service
 *
 * @class RecordService
 * @extends {Service}
 */
class RecordService extends Service {

  /**
   * Creates an instance of RecordService.
   * @param {Object} ctx - context
   * @memberof RecordService
   */
  constructor(ctx) {
    super(ctx, 'Record');
  }
}

module.exports = RecordService;
