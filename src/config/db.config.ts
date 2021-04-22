import dotenv from 'dotenv'
import mongodb from 'mongodb'

dotenv.config()

class Database {
  client: any

  constructor() {
    this.connect()
  }

  async connect() {
    const { NODE_ENV, QA_DB_URL, DOCKER_DB_URL } = process.env
    const connectionUri =
      NODE_ENV === 'prod' ? QA_DB_URL || '' : DOCKER_DB_URL || ''
    this.client = new mongodb.MongoClient(connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000,
      keepAlive: true
    })
    await this.client
      .connect()
      .then(console.log('connected to mongodb'))
      .catch((e: string) => console.error(`Fatal error occurred: ${e}`))
  }
}

export default new Database().client
