'use strict';
const assert = require('assert');

module.exports = {
  generateSortParam(sort) {
    assert(typeof sort === 'string', `[helper][generateSortParam] - sort需为字符串，sort: ${sort}`);
    const param = {};

    const sorts = sort.split(',');
    for (const s of sorts) {
      if (s.startsWith('-')) {
        param[s.substr(1, s.length - 1)] = -1;
      } else {
        param[s] = 1;
      }
    }
    return param;
  },

  rule: {
    limit: {
      type: 'string',
    },
    offset: {
      type: 'string',
    },
    sort: {
      type: 'string',
      default: '-created_at',
    },
  },
};
