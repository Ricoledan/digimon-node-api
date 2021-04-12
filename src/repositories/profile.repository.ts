import client from '../config/db.config'

class ProfileRepository {
  async readAll(req: any, res: any) {
    try {
      const results = await client
        .db('digimon')
        .collection('profile')
        .find()
        .toArray()

      console.log(results)

      return res.send(results)
    } catch (e) {
      console.error(e)
    }
    client.close()
  }
  async readOne(req: any, res: any) {
    const getName = req.params.name

    try {
      const result = await client
        .db('digimon')
        .collection('profile')
        .findOne({ name: getName })

      console.log(result)

      return res.send(result)
    } catch (e) {
      console.error(e)
    }
    client.close()
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
