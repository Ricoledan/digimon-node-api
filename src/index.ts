import server from './server'
import mongo from './config/mongo.config'
import logger from './lib/logger'
import chalk from 'chalk'

const PORT: number = parseInt(process.env.PORT as string, 10)

mongo()

server.listen(PORT, () => {
  logger.info(
    chalk.bgCyan(`[デジタルモンスター]`),
    chalk.bold.blue(`: running on http://localhost:${PORT}`)
  )
})
