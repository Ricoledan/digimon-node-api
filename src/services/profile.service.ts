import ProfileRepository from '../repositories/profile.repository'
import type { Request } from 'express'
class ProfileService {
  async getProfiles(req: Request) {
    const getProfileInfo = await ProfileRepository.read(req)

    return getProfileInfo
  }

  async createProfiles(req: Request) {
    const createOneProfile = await ProfileRepository.create(req)

    return createOneProfile
  }

  async updateProfiles(req: Request) {
    const updateOneProfile = await ProfileRepository.update(req)

    return updateOneProfile
  }

  async deleteProfiles(req: Request) {
    const deleteOneProfile = await ProfileRepository.delete(req)

    return deleteOneProfile
  }
}

export default new ProfileService()
