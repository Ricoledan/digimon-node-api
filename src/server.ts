import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import logger from './lib/logger'
import morgan from './config/morgan'
import compression from 'compression'
import chalk from 'chalk'
import ProfileRouter from './routes/profile.route'
import UserRouter from './routes/user.route'
import EsRouter from './routes/es.route'
import LogsRouter from './routes/logs.route'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const app = express()

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

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(morgan)

app.use('/api', ProfileRouter, UserRouter, EsRouter, LogsRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('digimon api')
})

const PORT: number = parseInt(process.env.PORT as string, 10)

app.listen(PORT, () => {
  logger.info(
    chalk.bgCyan(`[デジタルモンスター]`),
    chalk.bold.blue(`: running on http://localhost:${PORT}`)
  )
})
