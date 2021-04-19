'use strict'

exports.mongoose = {
  client: {
    url: 'mongodb://localhost:27017/cqerp',
    options: {
      user: 'cqerp',
      pass: 'cqerp123456',
    },
  },
};

exports.redis = {
  client: {
    port: 6379,
    host: 'localhost',
    password: '',
    db: 0
  }
};

exports.noPrefix = false;

exports.auth = {
  prefix: 'reading'
};
