import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from './config/morgan'
import compression from 'compression'
import ProfileRouter from './routes/profile.route'
import UserRouter from './routes/user.route'
import LogsRouter from './routes/logs.route'
import HealthCheckRouter from './routes/healthcheck.route'



const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(morgan)

app.use('/api', ProfileRouter, UserRouter, LogsRouter, HealthCheckRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('[デジタルモンスター]')
})

export default app
