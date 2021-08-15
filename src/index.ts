import app from './server'
import logger from './lib/logger'
import chalk from 'chalk'

const PORT: number = parseInt(process.env.PORT as string, 10)

app.listen(PORT, () => {
  logger.info(
    chalk.bgCyan(`[デジタルモンスター]`),
    chalk.bold.blue(`: running on http://localhost:${PORT}`)
  )
})
