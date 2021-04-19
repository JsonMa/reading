'use strict';

// @ts-nocheck
const Initiater = require('../../initiater');

const {
  app,
  assert,
} = require('egg-mock/bootstrap');

describe('test/app/controller/login.test.js', () => {
  const initiater = new Initiater(app);

  before(async () => {
    // 数据初始化
    await app.model.Record.remove();
    await app.model.User.remove();
    await app.model.Question.remove();
    await app.model.Commodity.remove();
    await initiater.inject(['commodity', 'question']);
  });

  it('user login', async function() {
    this.users = []; // 登录用户
    const openid = 'gxq@123456';
    const resp = await app.httpRequest()
      .post('/api/auth/login')
      .send({
        code: 'gxq@123456',
      })
      .expect(200);
    assert.equal(openid, resp.body.data.data.user.openid);
    this.users.push(resp.body.data.data);
  });

  it('admin login', async function() {
    const resp = await app.httpRequest()
      .post('/api/auth/admin/login')
      .send({
        code: 'gxq@123456',
      });
    assert.equal(resp.body.code, 0);
    this.users.push(resp.body.data.data);
  });

  it('logout', async function() {
    for (let i = 0; i < this.users.length; i++) {
      const resp = await app.httpRequest()
        .get('/api/auth/logout')
        .set('access_token', this.users[i].token)
        .expect(200);
      assert.equal(resp.body.code, 0);
    }
  });
});
