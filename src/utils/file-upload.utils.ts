import { extname, join } from 'path';
import * as fs from 'fs';

import { HttpException, HttpStatus } from '@nestjs/common';

// Разрешить только изображения
export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
    return callback(
      new HttpException(
        'Only image files are allowed!',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};

// Созадние папки фотографий отелья
export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  callback(null, `${name}${fileExtName}`);
};

export const destination = (req, file, cb) => {
  const path = join(
    __dirname,
    '../../',
    `/public/images/${req.params.id.slice(1)}`,
  );
  fs.stat(path, function (err) {
    if (!err) {
      return true;
    } else if (err.code === 'ENOENT') {
      fs.mkdir(
        join(__dirname, '../../', `/public/images/${req.params.id.slice(1)}`),
        (err) => {
          if (err) {
            return console.error(err);
          }
        },
      );
    }
  });

  cb(null, `./public/images/${req.params.id.slice(1)}`);
};
