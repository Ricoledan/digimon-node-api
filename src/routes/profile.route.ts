import { Router } from 'express'
import ProfileController from '../controllers/profile.controller'

const router: Router = Router()

router.get('/profiles', [], ProfileController.getProfiles)
router.get('/profiles/:name', [], ProfileController.getProfiles)
router.post('/profiles', [], ProfileController.createProfiles)
router.patch('/profiles/:name', [], ProfileController.updateProfiles)
router.delete('/profiles/:name', [], ProfileController.deleteProfiles)

export default router
