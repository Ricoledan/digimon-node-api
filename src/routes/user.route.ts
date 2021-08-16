import { Router } from 'express'
import UserController from '../controllers/user.controller'

const router: Router = Router()

router.get('/users', UserController.getUsers)
router.get('/users/:email', UserController.getUsers)
router.post('/users', UserController.createUsers)
router.patch('/users/:email', UserController.updateUsers)
router.delete('/users/:email', UserController.deleteUsers)

export default router
