import ProfileRepository from '../repositories/profile.repository'
class ProfileService {
  async getProfiles(req: any, res: any) {
    return await ProfileRepository.read(req, res)
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
