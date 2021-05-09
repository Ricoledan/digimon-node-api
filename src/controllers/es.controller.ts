import client from '../config/es.config'
import logger from '../lib/logger'
import type { Request, Response } from 'express'
class EsController {
  async getTest(req: Request, res: Response) {
    logger.info(client)

    try {
      return res.send('test get')
    } catch (e: any) {
      logger.error(e)
      res.status(500).send('error occurred while trying to get route')
    }
  }
  async postTest(req: Request, res: Response) {
    try {
      return res.send('test post')
    } catch (e: any) {
      logger.error(e)
      res.status(500).send('error occurred while trying to post route')
    }
  }
}

export default new EsController()
