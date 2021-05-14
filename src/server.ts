import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import chalk from 'chalk'
import logger from './lib/logger'
import morgan from './config/morgan'
import ProfileRouter from './routes/profile.route'
import EsRouter from './routes/es.route'
import LogsRouter from './routes/logs.route'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const app = express()
const PORT: number = parseInt(process.env.PORT as string, 10)

const connectionUri =
  process.env.NODE_ENV === 'prod'
    ? process.env.QA_DB_URL!
    : process.env.DOCKER_DB_URL!

mongoose
  .connect(connectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
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
app.use(morgan)

app.use('/api', ProfileRouter, EsRouter, LogsRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Digimon API')
})

app.listen(PORT, () => {
  console.log(
    chalk.bgCyan(`[デジタルモンスター]`),
    chalk.bold.blue(`: running on http://localhost:${PORT}`)
  )
})
