import UserService from '../services/user.service'
import logger from '../lib/logger'
import type { Request, Response } from 'express'
class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const results = await UserService.getUsers(req)
      logger.info(results)

      return res.send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(e.status || 500).send({
        error: 'error occurred reading active Users'
      })
    }
  }

  async createUsers(req: Request, res: Response) {
    try {
      const results = await UserService.createUsers(req)
      logger.info(results)

      return res.status(201).send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(e.status || 500).send({
        error: 'error occurred creating profile'
      })
    }
  }

  async updateUsers(req: Request, res: Response) {
    try {
      const results = await UserService.updateUsers(req)
      logger.info(results)

      return res.status(201).send(results)
    } catch (e: any) {
      logger.error(e)
      res.status(e.status || 500).send({
        error: 'error occurred updating profile'
      })
    }
  }

  async deleteUsers(req: Request, res: Response) {
    try {
      const results = await UserService.deleteUsers(req)
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

export default new UserController()
