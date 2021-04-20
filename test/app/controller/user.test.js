'use strict';

// @ts-nocheck
const {
  app,
  assert,
} = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {

  before(async () => {
    // 用户登录
    const resp = await app.httpRequest()
      .post('/api/auth/login')
      .send({
        code: 'gxq@123456',
      });
    this.accessToken = resp.body.data.data.token;
  });

  after(async () => {
    await app.model.Record.remove(); // 清除答题记录
    await app.model.Order.remove(); // 清除领奖记录
    // 用户登出
    await app.httpRequest()
      .get('/api/auth/logout')
      .set('access_token', this.accessToken)
      .expect(200);
  });

  it('should get user records', async () => {
    const resp = await app.httpRequest()
      .get('/api/users/statistics')
      .set('access_token', this.accessToken)
      .expect(200);
    assert.equal(resp.body.code, 0);
  });
});

