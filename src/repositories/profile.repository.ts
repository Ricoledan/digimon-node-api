import profileModel from '../models/profile.model'
import logger from '../lib/logger'
import type { Request } from 'express'

class ProfileRepository {
  async read(req: Request) {
    const getName = req.params.name

    try {
      if (getName) {
        const profileByName = await profileModel.find({ name: getName })
        return profileByName
      }

      const allProfiles = await profileModel.find()
      return allProfiles
    } catch (e) {
      logger.error(e)
    }
  }

  async create(req: Request) {
    const getRequestBody = req.body

    const profile = new profileModel({
      name: getRequestBody.name,
      level: getRequestBody.level,
      type: getRequestBody.type,
      attribute: getRequestBody.attribute,
      field: getRequestBody.field ?? null,
      group: getRequestBody.group ?? null,
      technique: getRequestBody.technique,
      artwork: getRequestBody.artwork,
      profile: getRequestBody.profile
    })

    try {
      const createProfile = await profile.save()
      return createProfile
    } catch (e) {
      logger.error(e)
    }
  }

  async update(req: Request) {
    const getName = req.params.name
    const getRequestBody = req.body

    try {
      const getDocumentFromDB: any = await profileModel
        .find({ name: getName })
        .then((result) => {
          return result
        })

      const updateProfile = await profileModel.updateOne(
        {
          name: getName
        },
        {
          level: getRequestBody.level ?? getDocumentFromDB.level,
          type: getRequestBody.type ?? getDocumentFromDB.type,
          attribute: getRequestBody.attribute ?? getDocumentFromDB.attribute,
          field: getRequestBody.field ?? getDocumentFromDB.field,
          group: getRequestBody.group ?? getDocumentFromDB.group,
          technique: getRequestBody.technique ?? getDocumentFromDB.technique,
          artwork: getRequestBody.artwork ?? getDocumentFromDB.artwork,
          profile: getRequestBody.profile ?? getDocumentFromDB.profile
        }
      )
      return updateProfile
    } catch (e) {
      logger.error(e)
    }
  }

  async delete(req: Request) {
    const getName = req.params.name

    try {
      const deleteProfile = await profileModel.deleteOne({
        name: getName
      })

      return deleteProfile
    } catch (e) {
      logger.error(e)
    }
  }
}

export default new ProfileRepository()
