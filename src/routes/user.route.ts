import { Router } from 'express'
import UserController from '../controllers/user.controller'

const router: Router = Router()

router.get('/users', [], UserController.getUsers)
router.get('/users/:name', [], UserController.getUsers)
router.post('/users', [], UserController.createUsers)
router.patch('/users/:name', [], UserController.updateUsers)
router.delete('/users/:name', [], UserController.deleteUsers)

export default router
