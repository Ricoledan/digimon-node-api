import { Router, Request, Response } from 'express'

const router: Router = Router()

router.get('/health', (req: Request, res: Response) => {
  res.send('health check')
})

export default router
