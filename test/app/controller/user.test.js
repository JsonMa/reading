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
    const record = await app.model.Record.findOne({ openid: 'gxq@123456', totalScore: 30 });
    await app.model.User.update({ openid: 'gxq@123456' }, { reward: '0' });
    const reward = await app.httpRequest()
      .post('/api/orders')
      .set('access_token', this.accessToken)
      .send({
        record_id: record._id,
        reward: '3',
        name: 'jsonma',
        phone: '13896120441',
        area: '重庆市渝北区',
        address: '重庆市渝北区',
      });
    assert.equal(reward.body.code, 0);
    assert.equal(reward.body.data.data.level, 'level1'); // 申请的第三关，实际得到第一关
    const resp = await app.httpRequest()
      .get('/api/users/statistics')
      .set('access_token', this.accessToken)
      .expect(200);
    assert.equal(resp.body.code, 0);
  });
});

