import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

class Database {
  client: any

  constructor() {
    this.connect()
  }

  async connect() {
    const uri =
      process.env.NODE_ENV === 'prod'
        ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@yggdrasil.ug5tw.mongodb.net/digimon?retryWrites=true&w=majority`
        : `mongodb://${process.env.DOCKER_DB_USER}:${process.env.DOCKER_DB_PASSWORD}@127.0.0.1:27017/`

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000,
      keepAlive: true
    }

    this.client = mongoose.connect(uri, options)

    await this.client.connect()
    .then(console.log('connected to mongodb'))
    .catch((e: string) => console.error(`Fatal error occurred: ${e}`))

  //   this.client = new mongodb.MongoClient(uri, options)

  //   await this.client
  //     .connect()
  //     .then(console.log('connected to mongodb'))
  //     .catch((e: string) => console.error(`Fatal error occurred: ${e}`))
  // }
}

export default new Database().client
