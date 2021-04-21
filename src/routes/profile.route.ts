import { Router } from 'express'
import ProfileController from '../controllers/profile.controller'

const router: Router = Router()

router.get('/profiles', [], ProfileController.getProfiles)
router.get('/profiles/:name', [], ProfileController.getProfiles)
router.post('/profiles', [], ProfileController.createProfile)
router.patch('/profiles/:name', [], ProfileController.updateProfile)
router.delete('/profiles/:name', [], ProfileController.deleteProfile)

export default router
