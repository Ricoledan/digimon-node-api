import ProfileService from '../services/profile.service'
import logger from '../lib/logger'
import type { Request, Response } from 'express'
class ProfileController {
  async getProfiles(req: Request, res: Response) {
    try {
      const results = await ProfileService.getProfiles(req)
      logger.info(results)

      return res.send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(e.status || 500).send({
        error: 'error occurred reading active profiles'
      })
    }
  }

  async createProfiles(req: Request, res: Response) {
    try {
      const results = await ProfileService.createProfiles(req)
      logger.info(results)

      return res.status(201).send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(e.status || 500).send({
        error: 'error occurred creating profile'
      })
    }
  }

  async updateProfiles(req: Request, res: Response) {
    try {
      const results = await ProfileService.updateProfiles(req)
      logger.info(results)

      return res.status(201).send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(e.status || 500).send({
        error: 'error occurred updating profile'
      })
    }
  }

  async deleteProfiles(req: Request, res: Response) {
    try {
      const results = await ProfileService.deleteProfiles(req)
      logger.info(results)

      return res.status(201).send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(e.status || 500).send({
        error: 'error occurred deleting profile'
      })
    }
  }
}

export default new ProfileController()
