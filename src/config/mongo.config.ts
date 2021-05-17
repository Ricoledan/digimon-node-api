import mongoose from 'mongoose'
import logger from '../lib/logger'

const mongo = async () => {
  const connectionUri =
    process.env.NODE_ENV === 'prod'
      ? process.env.QA_DB_URL!
      : process.env.DOCKER_DB_URL!

  mongoose
    .connect(connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => {
      logger.info('connected to mongodb')
    })
    .catch((e) => {
      logger.error(e)
    })
}

export default mongo
