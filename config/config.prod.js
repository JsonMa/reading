'use strict'

exports.mongoose = {
  client: {
    url: 'mongodb://127.0.0.1/reading',
    options: {
      useUnifiedTopology: true,
      user: 'reading',
      pass: 'reading123456',
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
