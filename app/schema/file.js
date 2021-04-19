'use strict';

module.exports = {
  properties: {
    name: {
      type: 'string',
      pattern:
        '.(jpg|JPG|jpeg|JPEG|png|PNG|xlsx|XLSX|xls|XLS|txt|TXT|gif|GIF|bmp|BMP|mp4|MP4|mp3|MP3|silk|m4a)$',
      maxLength: 128
    },
    path: {
      type: 'string',
      maxLength: 128
    },
    size: {
      type: 'number'
    },
    type: {
      type: 'string',
      maxLength: 128
    }
  }
};
