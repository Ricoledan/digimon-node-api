import UserRepository from '../repositories/user.repository'
import type { Request } from 'express'
class UserService {
  async getUsers(req: Request) {
    const getUserInfo = await UserRepository.read(req)

    return getUserInfo
  }

  async createUsers(req: Request) {
    const createOneUser = await UserRepository.create(req)

    return createOneUser
  }

  async updateUsers(req: Request) {
    const updateOneUser = await UserRepository.update(req)

    return updateOneUser
  }

  async deleteUsers(req: Request) {
    const deleteOneUser = await UserRepository.delete(req)

    return deleteOneUser
  }
}

export default new UserService()
