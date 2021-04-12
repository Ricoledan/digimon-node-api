import client from '../config/db.config'

class ProfileRepository {
  async readAll(req: any, res: any) {
    try {
      const result = await client
        .db('digimon')
        .collection('profile')
        .find({ 'timestamp.deleted_at': { $eq: null } })
      console.log(result)
      return res.send('success')
    } catch (e) {
      console.error(e)
    }
  }
  async readOne(req: any, res: any) {
    return res.send('read one profiles')
  }
  async create(req: any, res: any) {
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
