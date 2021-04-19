'use strict'

exports.mongoose = {
  client: {
    url: 'mongodb://reading:reading_123456@127.0.0.1/tracing_u',
    options: {}
  }
};

exports.redis = {
  client: {
    port: 6379,
    host: 'localhost',
    password: 'reading_123456',
    db: 0
  }
};

exports.noPrefix = false;

exports.auth = {
  prefix: 'reading'
};
