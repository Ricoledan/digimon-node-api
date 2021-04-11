class ProfileService {
  async getAll(req: any, res: any) {
    return await res.send('getAll')
  }
  async getByName(req: any, res: any) {
    return await res.send('getProfileByName')
  }
  async create(req: any, res: any) {
    return await res.send('create')
  }
  async update(req: any, res: any) {
    return await res.send('update')
  }
  async delete(req: any, res: any) {
    return await res.send('deleteData')
  }
}

export default new ProfileService()
