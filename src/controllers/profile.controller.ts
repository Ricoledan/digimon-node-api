import ProfileService from '../services/profile.service'

class ProfileController {
  async getAllProfiles(req: any, res: any) {
    return await ProfileService.getAll(req, res)
  }
  async getProfileByName(req: any, res: any) {
    return await ProfileService.getByName(req, res)
  }

  async createProfile(req: any, res: any) {
    return await ProfileService.create(req, res)
  }
  async updateProfile(req: any, res: any) {
    return await ProfileService.update(req, res)
  }
  async deleteProfile(req: any, res: any) {
    return await ProfileService.delete(req, res)
  }
}

export default new ProfileController()
