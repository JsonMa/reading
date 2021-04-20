'use strict';

// @ts-nocheck
const {
  app,
  assert,
} = require('egg-mock/bootstrap');

describe('test/app/controller/question.test.js', () => {

  before(async () => {
    // 用户登录
    await app.model.Record.remove();
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

  it('should get three questionaires', async () => {
    const resp = await app.httpRequest()
      .get('/api/questions/chance')
      .set('access_token', this.accessToken)
      .expect(200);
    assert.equal(resp.body.code, 0);
    assert.equal(resp.body.data.data.chance, 0);
  });


  it('should get over times error', async () => {
    const resp = await app.httpRequest()
      .get('/api/questions')
      .set('access_token', this.accessToken)
      .expect(200);
    assert.equal(resp.body.code, 11002);
  });

  it('should submit correct answer success', async () => {
    const level_type = 'level1';
    const { _id: question_id, answer: question_value } = this.questionaires[0][level_type][0];
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
  });

  it('should submit error answer success', async () => {
    const level_type = 'level1';
    const { _id: question_id } = this.questionaires[0][level_type][1];
    const resp = await app.httpRequest()
      .post(`/api/questions/${this.questionaires[0].id}/answer`)
      .set('access_token', this.accessToken)
      .send({
        level_type,
        question_id,
        question_value: 'F',
      })
      .expect(200);
    assert.equal(resp.body.code, 11008);
  });

  it('should get questionaire closed error', async () => {
    const level_type = 'level1';
    const { _id: question_id } = this.questionaires[0][level_type][2];
    const resp = await app.httpRequest()
      .post(`/api/questions/${this.questionaires[0].id}/answer`)
      .set('access_token', this.accessToken)
      .send({
        level_type,
        question_id,
        question_value: 'C',
      })
      .expect(200);
    assert.equal(resp.body.code, 11007);
  });

  it('should pass level1', async () => {
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
  });

  it('should close level2', async () => {
    const level_type = 'level2';
    const { _id: question_id } = this.questionaires[1][level_type][0];
    const resp = await app.httpRequest()
      .post(`/api/questions/${this.questionaires[1].id}/close`)
      .set('access_token', this.accessToken)
      .send({
        question_id,
      })
      .expect(200);
    assert.equal(resp.body.code, 0);
    const targetRecord = await app.model.Record.findById(this.questionaires[1].id);
    assert.equal(targetRecord.level1Score, 10);
    assert.equal(targetRecord.totalScore, 10);
    assert.equal(targetRecord.isEnd, true);
  });

  it('should pass all level', async () => {
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
  });
});
