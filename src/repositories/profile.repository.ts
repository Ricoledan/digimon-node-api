class ProfileRepository {
  async readAll(req: any, res: any) {
    return res.send('read all profiles')
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
