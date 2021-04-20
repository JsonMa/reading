'use strict';

module.exports = app => {
  /* istanbul ignore next */
  const prefix = '/api';

  // index
  app.get('/', 'home.index');

  // auth
  app.post(`${prefix}/auth/login`, 'auth.login');
  app.get(`${prefix}/auth/logout`, 'auth.logout');
  app.post(`${prefix}/auth/admin/login`, 'auth.admin');

  // user
  app.get(`${prefix}/users`, 'user.index');
  app.get(`${prefix}/users/statistics`, 'user.statistics'); // 答题统计

  // questions
  app.get(`${prefix}/questions`, 'question.index'); // 领取题目
  app.get(`${prefix}/questions/chance`, 'question.chance'); // 获取答题次数
  app.post(`${prefix}/questions/:id/answer`, 'question.answer'); // 提交答案
  app.post(`${prefix}/questions/:id/close`, 'question.close'); // 关闭答题

  // order
  app.post(`${prefix}/orders`, 'order.create'); // 提交订单
  app.get(`${prefix}/orders`, 'order.index'); // 订单列表
  app.get(`${prefix}/orders/excel`, 'order.excel'); // 订单列表excel

  // miniprogram
  app.get(`${prefix}/mini_program/code`, 'miniProgram.code');
  app.post(`${prefix}/mini_program/user_info/phone`, 'miniProgram.phone');
};
