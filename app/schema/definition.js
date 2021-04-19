'use strict';

module.exports = {
  oid: {
    type: 'string',
    pattern: '^[abcdef0-9]{24}$',
  },
  str: {
    type: 'string',
    pattern: '^.{1,24}$',
  },
  text: {
    type: 'string',
    pattern: '^.{1,1024}$',
  },
  tel: {
    type: 'string',
    pattern: '^1[3,4,5,7,8,9]\\d{9}$',
  },
  mobile: {
    type: 'string',
    pattern: '[1,+]\\d{10,20}',
    // pattern: '(^\\d{7,11}$|^(\\w-*\\.*)+@(\\w-?)+(\\.\\w{2,})+$)',
  },
  email: {
    type: 'string',
    pattern:
      '^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$',
  },
  password: {
    type: 'string',
  },
  name: {
    type: 'string',
    maxLength: 30,
    minLength: 1,
  },
  company: {
    type: 'string',
    maxLength: 30,
    minLength: 2,
  },
  address: {
    type: 'string',
    maxLength: 60,
    minLength: 2,
  },
  role_id: {
    type: 'integer',
    minimum: 1,
    maximum: 60,
  },
  uuidRegrex:
    '^[0-9a-f]{8}-[0-9a-f]{4}-[1-4][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$',
  uuid: {
    type: 'string',
    pattern:
      '^[0-9a-f]{8}-[0-9a-f]{4}-[1-4][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$',
  },
  date: {
    type: 'string',
    format: 'date-time',
  },
  url: {
    type: 'string',
    pattern:
      '(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]',
  },
  role_type: {
    type: 'string',
    enum: ['platform', 'factory', 'business', 'courier', 'salesman'],
  },
};
