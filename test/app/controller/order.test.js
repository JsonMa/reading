'use strict';

// @ts-nocheck
const {
  app,
  assert,
} = require('egg-mock/bootstrap');

describe('test/app/controller/order.test.js', () => {

  before(async () => {
    // 用户登录
    await app.model.Record.remove(); // 清除答题记录
    await app.model.Order.remove(); // 清除领奖记录
    const resp = await app.httpRequest()
      .post('/api/auth/login')
      .send({
        code: 'gxq@123456',
      });
    this.accessToken = resp.body.data.data.token;
  });

  after(async () => {
    // 用户登出
    await app.httpRequest()
      .get('/api/auth/logout')
      .set('access_token', this.accessToken)
      .expect(200);
  });

  it('should get three questionaires', async () => {
    const results = [];
    for (let i = 0; i < 3; i++) {
      const resp = await app.httpRequest()
        .get('/api/questions')
        .set('access_token', this.accessToken)
        .expect(200);
      assert.equal(resp.body.code, 0);
      assert.equal(resp.body.data.data.left_chance, 2 - i);
      results.push(resp.body.data.data);
    }
    this.questionaires = results;
  });

  it('should get level1 reward', async () => {
    const level_type = 'level1';
    const questions = this.questionaires[1][level_type];
    for (let i = 0; i < questions.length; i++) {
      const { _id: question_id, answer: question_value } = this.questionaires[1][level_type][i];
      const resp = await app.httpRequest()
        .post(`/api/questions/${this.questionaires[1].id}/answer`)
        .set('access_token', this.accessToken)
        .send({
          level_type,
          question_id,
          question_value,
        })
        .expect(200);
      assert.equal(resp.body.code, 0);
    }
    const targetRecord = await app.model.Record.findById(this.questionaires[1].id);
    assert.equal(targetRecord.level1Score, 10);
    assert.equal(targetRecord.totalScore, 10);

    // 提交奖品申请订单
    const resp = await app.httpRequest()
      .post('/api/orders')
      .set('access_token', this.accessToken)
      .send({
        record_id: targetRecord._id,
        reward: 1, // 第一关奖励
        name: 'jsonma',
        phone: '13896120441',
        area: '重庆市渝北区',
        address: '重庆市渝北区',
      });
    assert.equal(resp.body.code, 0);
  });

  it('should pass all level but get level1 reward', async () => {
    await app.model.User.update({ openid: 'gxq@123456' }, { reward: '0' }); // 清除领奖记录
    await app.model.Commodity.update({ index: '3' }, { count: 0 });
    await app.model.Commodity.update({ index: '2' }, { count: 0 });
    for (let i = 1; i <= 3; i++) {
      const level_type = `level${i}`;
      const questions = this.questionaires[2][level_type];
      for (let j = 0; j < questions.length; j++) {
        const { _id: question_id, answer: question_value } = this.questionaires[2][level_type][j];
        const resp = await app.httpRequest()
          .post(`/api/questions/${this.questionaires[2].id}/answer`)
          .set('access_token', this.accessToken)
          .send({
            level_type,
            question_id,
            question_value,
          })
          .expect(200);
        assert.equal(resp.body.code, 0);
      }
    }

    const targetRecord = await app.model.Record.findById(this.questionaires[2].id);
    assert.equal(targetRecord.level1Score, 10);
    assert.equal(targetRecord.level2Score, 10);
    assert.equal(targetRecord.level3Score, 10);
    assert.equal(targetRecord.totalScore, 30);

    // 提交奖品申请订单
    const resp = await app.httpRequest()
      .post('/api/orders')
      .set('access_token', this.accessToken)
      .send({
        record_id: targetRecord._id,
        reward: 3,
        name: 'jsonma',
        phone: '13896120441',
        area: '重庆市渝北区',
        address: '重庆市渝北区',
      });
    assert.equal(resp.body.code, 0);
    assert.equal(resp.body.data.data.level, 'level1');
  });

  it('should not reward twice', async () => {
    const level_type = 'level1';
    const questions = this.questionaires[0][level_type];
    for (let i = 0; i < questions.length; i++) {
      const { _id: question_id, answer: question_value } = this.questionaires[0][level_type][i];
      const resp = await app.httpRequest()
        .post(`/api/questions/${this.questionaires[0].id}/answer`)
        .set('access_token', this.accessToken)
        .send({
          level_type,
          question_id,
          question_value,
        })
        .expect(200);
      assert.equal(resp.body.code, 0);
    }
    const targetRecord = await app.model.Record.findById(this.questionaires[0].id);
    assert.equal(targetRecord.level1Score, 10);
    assert.equal(targetRecord.totalScore, 10);

    // 提交奖品申请订单
    const result = await app.httpRequest()
      .post('/api/orders')
      .set('access_token', this.accessToken)
      .send({
        record_id: targetRecord._id,
        reward: 1,
        name: 'jsonma',
        phone: '13896120441',
        area: '重庆市渝北区',
        address: '重庆市渝北区',
      });
    assert.equal(result.body.code, 12005);
  });
});
