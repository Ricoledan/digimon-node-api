import dotenv from 'dotenv'
import elasticSearch from 'elasticsearch'
// TODO: update to new ES package

dotenv.config()

class ElasticSearch {
  client: any

  constructor() {
    this.connect()
  }

  async connect() {
    this.client = new elasticSearch.Client({
      host: 'localhost:9200'
    })
    await this.client
      .connect()
      .then(console.log('connected to elasticsearch'))
      .catch((e: string) => console.error(`Fatal error occurred: ${e}`))
  }
}

export default new ElasticSearch().client
