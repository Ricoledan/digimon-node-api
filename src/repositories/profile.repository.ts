import profileModel from '../models/profile.model'
import logger from '../lib/logger'
import type { Request } from 'express'

class ProfileRepository {
  async read(req: Request) {
    const getName = req.params.name

    try {
      if (getName) {
        const profileByName = await profileModel.find({
          name: getName,
          'timestamps.deletedAt': { $eq: null }
        })

        return profileByName
      }
      const allProfiles = await profileModel.find({
        'timestamps.deletedAt': { $eq: null }
      })

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
      profile: getRequestBody.profile,
      timestamps: {
        deletedAt: null
      }
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
      const getDocumentFromDB: any = await profileModel.find({
        name: getName
      })

      const updatedProfileObj = {
        level: getRequestBody.level ?? getDocumentFromDB[0].level,
        type: getRequestBody.type ?? getDocumentFromDB[0].type,
        attribute: getRequestBody.attribute ?? getDocumentFromDB[0].attribute,
        field: getRequestBody.field ?? getDocumentFromDB[0].field,
        group: getRequestBody.group ?? getDocumentFromDB[0].group,
        technique: getRequestBody.technique ?? getDocumentFromDB[0].technique,
        artwork: getRequestBody.artwork ?? getDocumentFromDB[0].artwork,
        profile: getRequestBody.profile ?? getDocumentFromDB[0].profile,
        timestamps: {
          createdAt: getDocumentFromDB[0].timestamps.createdAt,
          updatedAt: now(),
          deletedAt: getDocumentFromDB[0].timestamps.deletedAt
        }
      }

      const updateProfile = await profileModel.updateOne(
        {
          name: getName
        },
        updatedProfileObj
      )

      return updateProfile
    } catch (e) {
      logger.error(e)
    }
  }

  async delete(req: Request) {
    const getName = req.params.name

    try {
      const getDocumentFromDB: any = await profileModel.find({
        name: getName
      })

      const profileObj = {
        level: getDocumentFromDB[0].level,
        type: getDocumentFromDB[0].type,
        attribute: getDocumentFromDB[0].attribute,
        field: getDocumentFromDB[0].field,
        group: getDocumentFromDB[0].group,
        technique: getDocumentFromDB[0].technique,
        artwork: getDocumentFromDB[0].artwork,
        profile: getDocumentFromDB[0].profile,
        timestamps: {
          createdAt: getDocumentFromDB[0].timestamps.createdAt,
          updatedAt: getDocumentFromDB[0].timestamps?.updatedAt,
          deletedAt: now()
        }
      }

      const softDeleteProfile = await profileModel.updateOne(
        {
          name: getName
        },
        profileObj
      )

      return softDeleteProfile
    } catch (e) {
      logger.error(e)
    }
  }
}

function now() {
  return new Date().toISOString()
}

export default new ProfileRepository()
