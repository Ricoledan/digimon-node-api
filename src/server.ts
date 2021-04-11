import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import ApiRouter from './routes/api.route';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', ApiRouter);
app.get('/', (req: Request, res: any) => {
  res.send(
    'nodejs-starter-template - starter template for various nodejs projects'
  );
});

app.listen(PORT, () => {
  console.log(`✊🏿[server]: running on http://localhost:${PORT}`);
});
