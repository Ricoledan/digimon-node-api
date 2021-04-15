import client from '../config/db.config'
import dayjs from 'dayjs'
import type { Request, Response } from 'express'

// add time date library
const now = dayjs().format()
console.log(now)

class ProfileRepository {
  async readAll(req: Request, res: Response) {
    try {
      const results = await client
        .db('digimon')
        .collection('profile')
        .find({ 'timestamp.deleted_at': { $eq: null } })
        .toArray()

      return res.send(results)
    } catch (e) {
      console.error(e)
    }
    client.close()
  }
  async readOne(req: Request, res: Response) {
    const getName = req.params.name

    try {
      const results = await client
        .db('digimon')
        .collection('profile')
        .findOne({ name: getName })

      return res.send(results)
    } catch (e) {
      console.error(e)
    }
    client.close()
  }
  async create(req: Request, res: Response) {
    const getRequestBody = req.body
    const createQuery = {
      __v: 0,
      name: getRequestBody.name,
      level: getRequestBody.level,
      type: getRequestBody.type,
      attribute: getRequestBody.attribute,
      field: getRequestBody.field ?? null,
      group: getRequestBody.group ?? null,
      technique: getRequestBody.technique,
      artwork: getRequestBody.artwork,
      profile: getRequestBody.profile,
      timestamp: {
        created_at: now,
        updated_at: null,
        deleted_at: null
      }
    }
    try {
      const results = await client
        .db('digimon')
        .collection('profile')
        .insertOne(createQuery)

      return res.send(results)
    } catch (e: any) {
      console.error(e)
    }
  }
  async update(req: Request, res: Response) {
    const getName = req.params.name
    const getRequestBody = req.body
    const getProfile = await client
      .db('digimon')
      .collection('profile')
      .findOne({ name: getName })
    const getCreatedTimestamp = getProfile.timestamp.created_at
    const getDeletedTimestamp = getProfile.timestamp.deleted_at

    try {
      const results = await client
        .db('digimon')
        .collection('profile')
        .updateOne(
          { name: getName },
          {
            $set: {
              level: getRequestBody.level ?? getProfile.level,
              type: getRequestBody.type ?? getProfile.type,
              attribute: getRequestBody.attribute ?? getProfile.attribute,
              field: getRequestBody.field ?? getProfile.field,
              group: getRequestBody.group ?? getProfile.group,
              technique: getRequestBody.technique ?? getProfile.technique,
              artwork: getRequestBody.artwork ?? getProfile.artwork,
              profile: getRequestBody.profile ?? getProfile.profile,
              timestamp: {
                created_at: getCreatedTimestamp,
                updated_at: now,
                deleted_at: getDeletedTimestamp
              }
            }
          }
        )

      return res.send(results)
    } catch (e) {
      console.log(e)
    }
  }

  async delete(req: Request, res: Response) {
    const getName = req.params.name
    const getProfile = await client
      .db('digimon')
      .collection('profile')
      .findOne({ name: getName })

    const getCreatedTimestamp = getProfile.timestamp.created_at

    try {
      const results = await client
        .db('digimon')
        .collection('profile')
        .updateOne(
          { name: getName },
          {
            $set: {
              timestamp: {
                created_at: getCreatedTimestamp,
                deleted_at: now,
                updated_at: now
              }
            }
          }
        )
      return res.send(results)
    } catch (e) {
      console.log(e)
    }
  }
}

export default new ProfileRepository()
