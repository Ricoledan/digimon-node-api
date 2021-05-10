import { Router } from 'express'
import LogController from '../controllers/logs.controller'

const router: Router = Router()

router.get('/logs', [], LogController.getAllLogs)
router.delete('/logs', [], LogController.bulkDeleteLogs)

export default router
