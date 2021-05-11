import morgan, { StreamOptions } from 'morgan'

import Logger from '../lib/logger'

const stream: StreamOptions = {
  write: (message) => Logger.http(message)
}

const skip = () => {
  const env = process.env.NODE_ENV || 'dev'
  return env !== 'dev'
}

const morganMiddleware = morgan(
  ':method :url status: :status response time: :response-time ms',
  { stream, skip }
)

export default morganMiddleware
