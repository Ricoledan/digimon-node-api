import client from '../config/db.config'

// add time date library
const now = ''

class ProfileRepository {
  async readAll(req: any, res: any) {
    try {
      const results = await client
        .db('digimon')
        .collection('profile')
        .find()
        .toArray()

      return res.send(results)
    } catch (e) {
      console.error(e)
    }
    client.close()
  }
  async readOne(req: any, res: any) {
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
  async create(req: any, res: any) {
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
    return res.send('create profile')
  }
  async update(req: any, res: any) {
    return res.send('update profile')
  }

  async delete(req: any, res: any) {
    return res.send('delete profile')
  }
}

export default new ProfileRepository()
