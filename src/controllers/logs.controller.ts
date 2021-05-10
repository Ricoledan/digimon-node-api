import LogService from '../services/logs.service'
import logger from '../lib/logger'
import type { Request, Response } from 'express'
class LogController {
  async getAllLogs(req: Request, res: Response) {
    try {
      const results = await LogService.retrieveLogs(req)

      return res.send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(e.status || 500).send({
        error: 'error occurred reading active profiles'
      })
    }
  }

  async bulkDeleteLogs(req: Request, res: Response) {
    try {
      await LogService.bulkDeleteLogs(req)

      return res
        .status(201)
        .send({ message: 'successfully truncated all.log & error.log' })
    } catch (e: any) {
      logger.error(e)
      res.status(e.status || 500).send({
        error: 'error occurred deleting profile'
      })
    }
  }
}

export default new LogController()
