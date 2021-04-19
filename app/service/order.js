'use strict';
const Service = require('../lib/DBService');

/**
 * OrderService
 *
 * @class OrderService
 * @extends {Service}
 */
class OrderService extends Service {

  /**
   *Creates an instance of OrderService.
   * @param {Object} ctx - context
   * @memberof CommodityService
   */
  constructor(ctx) {
    super(ctx, 'Order');
  }
}

module.exports = OrderService;
