import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import dotenv from 'dotenv'

dotenv.config()

aws.config.update({
  apiVersion: '2006-03-01',
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  region: process.env.AWSRegion
})

class AWSConfig {
  upload: any
  constructor() {
    this.upload()
  }

  async uploadToS3() {
    const s3 = new aws.S3()
    this.upload = multer({
      storage: multerS3({
        s3: s3,
        bucket: process.env.AWSBucket || '',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: (req, file, cb) => {
          cb(null, { fieldName: file.fieldname })
        },
        key: (req, file, cb) => {
          cb(null, Date.now().toString() + file.originalname)
        }
      })
    })
    await this.uploadToS3()
  }
}

export default new AWSConfig().upload
