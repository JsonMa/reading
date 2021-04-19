// had enabled by egg
exports.static = true;

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose'
};

exports.redis = {
  enable: true,
  package: 'egg-redis'
};

exports.ajv = {
  enable: true,
  package: 'egg-ajv'
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
