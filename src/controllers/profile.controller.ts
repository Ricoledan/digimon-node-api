import ProfileService from '../services/profile.service'
import type { Request, Response } from 'express'
class ProfileController {
  async getAllProfiles(req: Request, res: Response) {
    return await ProfileService.getAll(req, res)
  }
  async getProfileByName(req: Request, res: Response) {
    return await ProfileService.getByName(req, res)
  }

  async createProfile(req: Request, res: Response) {
    return await ProfileService.create(req, res)
  }
  async updateProfile(req: Request, res: Response) {
    return await ProfileService.update(req, res)
  }
  async deleteProfile(req: Request, res: Response) {
    return await ProfileService.delete(req, res)
  }
}

export default new ProfileController()
