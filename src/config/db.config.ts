import dotenv from 'dotenv'
import mongodb from 'mongodb'

dotenv.config()

class Database {
  client: any

  constructor() {
    this.connect()
  }

  async connect() {
    const connectionUri =
      process.env.NODE_ENV === 'prod'
        ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@yggdrasil.ug5tw.mongodb.net/digimon?retryWrites=true&w=majority`
        : `mongodb://${process.env.DOCKER_DB_USER}:${process.env.DOCKER_DB_PASSWORD}@127.0.0.1:27017`
    this.client = new mongodb.MongoClient(connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    await this.client
      .connect()
      .then(console.log('connected to mongodb'))
      .catch((e: string) => console.error(`Fatal error occurred: ${e}`))
  }
}

export default new Database().client
