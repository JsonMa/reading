'use strict';

module.exports = app => {
  /**
   * Home 相关路由
   *
   * @class HomeController
   * @extends {app.Controller}
   */
  class HomeController extends app.Controller {
    /**
     * index controller
     *
     * @class IndexController
     * @augments {app.Controller}
     */
    async index() {
      await this.ctx.render('home');
    }
  }
  return HomeController;
};
