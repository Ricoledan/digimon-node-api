import userModel from '../models/user.model'
import logger from '../lib/logger'
import type { Request } from 'express'
// import type { UserSchema } from '../types/users'

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

    const user = new userModel({
      firstName: getRequestBody.firstName,
      lastName: getRequestBody.lastName,
      userName: getRequestBody.userName,
      avatar: getRequestBody.avatar ?? null,
      email: getRequestBody.email,
      password: getRequestBody.password,
      timestamps: {
        deletedAt: null
      }
    })

    try {
      const createUser = await user.save()

      return createUser
    } catch (e) {
      logger.error(e)
    }
  }

  async update(req: Request) {
    const getEmail = req.params.email
    const getRequestBody = req.body

    try {
      const getDocumentFromDB: any = await userModel.find({
        email: getEmail,
        'timestamps.deletedAt': { $eq: null }
      })

      const updatedUserObj = {
        firstName: getRequestBody.firstName ?? getDocumentFromDB[0].firstName,
        lastName: getRequestBody.lastName ?? getDocumentFromDB[0].lastName,
        userName: getRequestBody.userName ?? getDocumentFromDB[0].userName,
        avatar: getRequestBody.avatar ?? getDocumentFromDB[0].avatar,
        email: getRequestBody.email ?? getDocumentFromDB[0].email,
        password: getRequestBody.password ?? getDocumentFromDB[0].password,
        timestamps: {
          createdAt: getDocumentFromDB[0].timestamps.createdAt,
          updatedAt: now(),
          deletedAt: getDocumentFromDB[0].timestamps.deletedAt
        }
      }

      const updateUser = await userModel.updateOne(
        {
          email: getEmail
        },
        updatedUserObj
      )

      return updateUser
    } catch (e) {
      logger.error(e)
    }
  }
  async delete(req: Request) {
    const getEmail = req.params.email
    console.log(getEmail)

    try {
      const getDocumentFromDB: any = await userModel.find({
        email: getEmail,
        'timestamps.deletedAt': { $eq: null }
      })

      const userObj = {
        firstName: getDocumentFromDB[0].firstName,
        lastName: getDocumentFromDB[0].lastName,
        userName: getDocumentFromDB[0].userName,
        avatar: getDocumentFromDB[0].avatar,
        email: getDocumentFromDB[0].email,
        password: getDocumentFromDB[0].password,
        timestamps: {
          createdAt: getDocumentFromDB[0].timestamps.createdAt,
          updatedAt: getDocumentFromDB[0].timestamps.updatedAt,
          deletedAt: now()
        }
      }

      console.log(userObj)

      const softDeleteProfile = await userModel.updateOne(
        {
          email: getEmail
        },
        userObj
      )

      console.log('soft', softDeleteProfile)

      return softDeleteProfile
    } catch (e) {
      logger.error(e)
    }
  }
}

function now() {
  return new Date().toISOString()
}

export default new UserRepository()
