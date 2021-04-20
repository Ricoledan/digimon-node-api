import { Router } from 'express'
import EsController from '../controllers/es.controller'

const router: Router = Router()

router.get('/esTest', [], EsController.getTest)
router.post('/esTest', [], EsController.postTest)

export default router
