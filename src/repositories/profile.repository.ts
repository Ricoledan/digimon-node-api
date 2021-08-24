import profileModel from '../models/profile.model'
import logger from '../lib/logger'
import type { Request } from 'express'
import type {
  Level,
  Type,
  Attribute,
  Field,
  Group,
  DigimonSchema
} from '../types/digimon'

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
    console.log(getRequestBody)

    const profile = new profileModel({
      name: getRequestBody.name,
      level: getRequestBody.level as Level,
      type: getRequestBody.type as Type,
      attribute: getRequestBody.attribute as Attribute,
      field: (getRequestBody.field as Field[]) ?? null,
      group: (getRequestBody.group as Group[]) ?? null,
      technique: getRequestBody.technique,
      artwork: getRequestBody.artwork,
      profile: getRequestBody.profile
    })

    try {
      const createProfile = await profile.save()

      return createProfile
    } catch (e: any) {
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
        level:
          (getRequestBody.level as Level) ??
          (getDocumentFromDB[0].level as Level),
        type:
          (getRequestBody.type as Type) ?? (getDocumentFromDB[0].type as Type),
        attribute:
          (getRequestBody.attribute as Attribute) ??
          (getDocumentFromDB[0].attribute as Attribute),
        field:
          (getRequestBody.field as Field[]) ??
          (getDocumentFromDB[0].field as Field[]),
        group:
          (getRequestBody.group as Group[]) ??
          (getDocumentFromDB[0].group as Group[]),
        technique: getRequestBody.technique ?? getDocumentFromDB[0].technique,
        artwork: getRequestBody.artwork ?? getDocumentFromDB[0].artwork,
        profile: getRequestBody.profile ?? getDocumentFromDB[0].profile
      } as DigimonSchema

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
        profile: getDocumentFromDB[0].profile
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
