import { Router, Request, Response } from 'express'

const router: Router = Router()

// note: build healthcheck that checks for db connections and other integral parts of the application.

router.get('/health-check', (req: Request, res: Response) => {
  res.send('healthcheck')
})

export default router
