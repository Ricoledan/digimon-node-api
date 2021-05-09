import dotenv from 'dotenv'
import { Client } from '@elastic/elasticsearch'
// import logger from '../lib/logger'
dotenv.config()

const client = new Client({ node: 'http://localhost:9200' })

export default client
