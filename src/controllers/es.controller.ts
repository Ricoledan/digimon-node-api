import type { Request, Response } from 'express'
class EsController {
  async getTest(req: Request, res: Response) {
    return res.send('test get')
  }
  async postTest(req: Request, res: Response) {
    return res.send('test post')
  }
}

export default new EsController()
