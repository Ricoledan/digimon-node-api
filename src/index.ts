import dotenv from 'dotenv'
import server from './server'
import mongo from './config/mongo.config'
import logger from './lib/logger'
import chalk from 'chalk'

dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10)

if (!process.env.PORT) {
  process.exit(1)
}

mongo()

server.listen(PORT, () => {
  logger.info(
    chalk.bgCyan(`[デジタルモンスター]`),
    chalk.bold.blue(`: running on http://localhost:${PORT}`)
  )
})
