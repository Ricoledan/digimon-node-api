import ProfileRepository from '../repositories/profile.repository'
class ProfileService {
  async getAll(req: any, res: any) {
    return await ProfileRepository.readAll(req, res)
  }
  async getByName(req: any, res: any) {
    return await ProfileRepository.readOne(req, res)
  }
  async create(req: any, res: any) {
    return await ProfileRepository.create(req, res)
  }
  async update(req: any, res: any) {
    return await ProfileRepository.update(req, res)
  }
  async delete(req: any, res: any) {
    return await ProfileRepository.delete(req, res)
  }
}

export default new ProfileService()
