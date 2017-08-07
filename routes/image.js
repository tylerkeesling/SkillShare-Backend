const express = require('express');
const router = express.Router();
const upload  = require('multer')();
const AWS = require('aws-sdk');
const uuid = require('uuid/v4');

AWS.config.update({ accessKeyId: process.env.S3_KEY, secretAccessKey: process.env.S3_SECRET });
const s3 = new AWS.S3();

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/image', (req, res, next) => {
  s3.listObjects({Bucket: process.env.S3_BUCKET}, (err, resp) => {
    console.log(process.env.S3_BUCKET)
    if (err) {
      next(err)
    } else {
      res.json({resp})
    }
  })
})

router.post('/image/:id', upload.single('image'), (req, res) => {
  let id = uuid();
  s3.putObject({
    Bucket: process.env.S3_BUCKET,
    Key: id,
    Body: new Buffer(req.file.buffer)
  }, err => {
    if (err) {
      next(err)
    } else {
      knex('users')
      .update('photo', `https://s3.us-east-2.amazonaws.com/skillshareimagebucket/${id}`)
      .where('id',req.params.id)
      res.json(`{"success": true}`)
    }
  });
})

module.exports = router;
