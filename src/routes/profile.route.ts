import { Router } from 'express'
import ProfileController from '../controllers/profile.controller'

const router: Router = Router()

router.get('/profile', ProfileController.getAllProfiles)
router.get('/profile/:name', ProfileController.getProfileByName)
router.post('/profile', ProfileController.createProfile)
router.put('/profile/:name', ProfileController.updateProfile)
router.delete('/profile/:name', ProfileController.deleteProfile)

export default router
