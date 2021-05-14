import userModel from '../models/user.model'
import logger from '../lib/logger'
import type { Request } from 'express'

class UserRepository {
  async read(req: Request) {
    const getName = req.params.name

    try {
      if (getName) {
        const userByName = await userModel.find({
          name: getName,
          'timestamps.deletedAt': { $eq: null }
        })

        return userByName
      }
      const allUsers = await userModel.find({
        'timestamps.deletedAt': { $eq: null }
      })

      return allUsers
    } catch (e) {
      logger.error(e)
    }
  }

  async create(req: Request) {
    const getRequestBody = req.body

    const user = new userModel({})

    try {
      const createUser = await user.save()

      return createUser
    } catch (e) {
      logger.error(e)
    }
  }

  async update(req: Request) {}
  async delete(req: Request) {}
}

export default new UserRepository()
