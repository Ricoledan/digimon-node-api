import { Router, Request, Response } from 'express'

const router: Router = Router()

router.get('/health-check', (req: Request, res: Response) => {
  res.send('healthcheck')
})

export default router
