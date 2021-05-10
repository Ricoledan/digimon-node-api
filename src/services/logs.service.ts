import fs from 'fs'
import path from 'path'
import logger from '../lib/logger'
import type { Request } from 'express'

class ProfileService {
  async retrieveLogs(req: Request) {
    try {
      if (req.query.type === 'errors') {
        const readAllErrors = fs.readFileSync(
          path.resolve(__dirname, '../../logs/error.log')
        )
        return readAllErrors
      }

      const readAllLogs = fs.readFileSync(
        path.resolve(__dirname, '../../logs/all.log')
      )

      return readAllLogs
    } catch (e) {
      logger.error(e)
    }
  }

  async bulkDeleteLogs(req: Request) {
    try {
      fs.truncateSync(path.resolve(__dirname, '../../logs/all.log'))
      fs.truncateSync(path.resolve(__dirname, '../../logs/error.log'))

      return
    } catch (e) {
      logger.error(e)
    }
  }
}

export default new ProfileService()
