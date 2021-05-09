import ProfileService from '../services/profile.service'
import logger from '../lib/logger'
import type { Request, Response } from 'express'
class ProfileController {
  async getProfiles(req: Request, res: Response) {
    try {
      const results = await ProfileService.getProfiles(req)

      return res.status(200).send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(500).send({
        error: 'error occurred reading active profile'
      })
    }
  }

  async createProfile(req: Request, res: Response) {
    try {
      const results = await ProfileService.createProfiles(req)

      return res.status(201).send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(500).send({
        error: 'error occurred creating profile'
      })
    }
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const results = await ProfileService.updateProfiles(req)

      return res.send(201).send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(500).send({
        error: 'error occurred updating profile'
      })
    }
  }

  async deleteProfile(req: Request, res: Response) {
    try {
      const results = await ProfileService.deleteProfiles(req)

      return res.send(201).send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(500).send({
        error: 'error occurred deleting profile'
      })
    }
  }
}

export default new ProfileController()
