import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../documentation'

const router: Router = Router()

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default router
