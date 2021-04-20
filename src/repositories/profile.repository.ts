import client from '../config/db.config'
import dayjs from 'dayjs'
import type { Request, Response } from 'express'

const now = dayjs().format()
console.log(now)

class ProfileRepository {
  async read(req: Request, res: Response) {
    const getName = req.params.name
    try {
      if (getName) {
        const results = await client
          .db('digimon')
          .collection('profiles')
          .findOne({ name: getName })

        return res.send(results)
      }
      const results = await client
        .db('digimon')
        .collection('profiles')
        .find({ 'timestamp.deleted_at': { $eq: null } })
        .toArray()
      await client.close()

      return res.send(results)
    } catch (e) {
      console.error(e)
    } finally {
      await client.end()
    }
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
        .collection('profiles')
        .insertOne(createQuery)
      await client.close()

      return res.send(results)
    } catch (e: any) {
      console.error(e)
    } finally {
      await client.end()
    }
  }
  async update(req: Request, res: Response) {
    const getName = req.params.name
    const getRequestBody = req.body
    const getProfile = await client
      .db('digimon')
      .collection('profiles')
      .findOne({ name: getName })
    const getCreatedTimestamp = getProfile.timestamp.created_at
    const getDeletedTimestamp = getProfile.timestamp.deleted_at

    try {
      const results = await client
        .db('digimon')
        .collection('profiles')
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
      await client.close()

      return res.send(results)
    } catch (e) {
      console.log(e)
    } finally {
      await client.end()
    }
  }

  async delete(req: Request, res: Response) {
    const getName = req.params.name
    const getProfile = await client
      .db('digimon')
      .collection('profiles')
      .findOne({ name: getName })

    const getCreatedTimestamp = getProfile.timestamp.created_at

    try {
      const results = await client
        .db('digimon')
        .collection('profiles')
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
      await client.close()

      return res.send(results)
    } catch (e) {
      console.log(e)
    } finally {
      await client.end()
    }
  }
}

export default new ProfileRepository()
