'use strict';

module.exports = {
  properties: {
    role_id: {
      $ref: 'schema.definition#/role_id',
    },
    platform: {
      type: 'object',
      properties: {
        name: {
          $ref: 'schema.definition#/name',
        },
        email: {
          $ref: 'schema.definition#/email',
        },
        phone: {
          $ref: 'schema.definition#/mobile',
        },
      },
      additionalProperties: false,
      required: ['name', 'phone'],
    },
    factory: {
      type: 'object',
      properties: {
        name: {
          $ref: 'schema.definition#/name',
        },
        public_account: {
          type: 'string',
        },
        email: {
          $ref: 'schema.definition#/email',
        },
        contact: {
          $ref: 'schema.definition#/name',
        },
        phone: {
          $ref: 'schema.definition#/mobile',
        },
        license: {
          $ref: 'schema.definition#/oid',
        },
        receiving_info: {
          type: 'object',
          properties: {
            name: {
              $ref: 'schema.definition#/name',
            },
            phone: {
              $ref: 'schema.definition#/mobile',
            },
            address: {
              $ref: 'schema.definition#/address',
            },
          },
          required: ['name', 'phone', 'address'],
          additionalProperties: false,
        },
      },
      required: [
        'email',
        'name',
        'public_account',
        'contact',
        'phone',
        'license',
      ],
      additionalProperties: false,
    },
    business: {
      type: 'object',
      properties: {
        name: {
          $ref: 'schema.definition#/company',
        },
        address: {
          $ref: 'schema.definition#/address',
        },
        phone: {
          $ref: 'schema.definition#/mobile',
        },
        contact: {
          $ref: 'schema.definition#/name',
        },
        banner: {
          $ref: 'schema.definition#/oid',
        },
        product: {
          $ref: 'schema.definition#/oid',
        },
      },
      required: ['address', 'name', 'phone', 'contact'],
      additionalProperties: false,
    },
    courier: {
      type: 'object',
      properties: {
        company: {
          $ref: 'schema.definition#/company',
        },
        name: {
          $ref: 'schema.definition#/name',
        },
        phone: {
          $ref: 'schema.definition#/mobile',
        },
        email: {
          $ref: 'schema.definition#/email',
        },
        employee_card: {
          $ref: 'schema.definition#/oid',
        },
      },
      required: ['company', 'name', 'phone', 'email', 'employee_card'],
      additionalProperties: false,
    },
    salesman: {
      type: 'object',
      properties: {
        name: {
          $ref: 'schema.definition#/name',
        },
        phone: {
          $ref: 'schema.definition#/mobile',
        },
        address: {
          $ref: 'schema.definition#/address',
        },
        id_card: {
          $ref: 'schema.definition#/oid',
        },
      },
      required: ['address', 'name', 'phone', 'id_card'],
      additionalProperties: false,
    },
    unionId: {
      type: 'string',
    },
    inviter: {
      $ref: 'schema.definition#/oid',
    },
    role_type: {
      $ref: 'schema.definition#/role_type',
    },
  },
};
