import * as dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import ProfileRouter from './routes/profile.route'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const app = express()
const PORT: number = parseInt(process.env.PORT as string, 10)

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/api', ProfileRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Digimon API')
})

app.listen(PORT, () => {
  console.log(`[デジタルモンスター]: running on http://localhost:${PORT}`)
})
