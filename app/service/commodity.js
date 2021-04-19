'use strict';
const Service = require('../lib/DBService');

/**
 * Commodity Service
 *
 * @class CommodityService
 * @extends {Service}
 */
class CommodityService extends Service {

  /**
   *Creates an instance of CommodityService.
   * @param {Object} ctx - context
   * @memberof CommodityService
   */
  constructor(ctx) {
    super(ctx, 'Commodity');
  }
}

module.exports = CommodityService;
