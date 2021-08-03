import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import logger from './lib/logger'
import mongo from './config/mongo.config'
import morgan from './config/morgan'
import compression from 'compression'
import chalk from 'chalk'
import ProfileRouter from './routes/profile.route'
import UserRouter from './routes/user.route'
import LogsRouter from './routes/logs.route'
import HealthCheckRouter from './routes/healthcheck.route'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const app = express()

mongo()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(morgan)

app.use('/api', ProfileRouter, UserRouter, LogsRouter, HealthCheckRouter)
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
