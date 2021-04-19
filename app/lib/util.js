'use strict';

module.exports = {
  checKTel(tel) {
    return /^\d{7,11}$/g.test(tel);
  },
  checkEmail(email) {
    return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g.test(email);
  },

  regExp: {
    phone: /^1(3|4|5|7|8)\d{9}$/,
    email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g,
    tel: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,
    idCard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/,
  },
};
