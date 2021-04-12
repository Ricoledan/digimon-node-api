import dotenv from 'dotenv'
import mongodb from 'mongodb'

dotenv.config()

class Database {
  client: any

  constructor() {
    this.connect()
  }

  async connect() {
    const connectionUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@yggdrasil.ug5tw.mongodb.net/digimon?retryWrites=true&w=majority`
    this.client = new mongodb.MongoClient(connectionUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    await this.client
      .connect()
      .then(console.log('connected to mongodb'))
      .catch((e: string) => console.error(`Fatal error occurred: ${e}`))

    this.client.close()
  }
}

export default new Database().client
