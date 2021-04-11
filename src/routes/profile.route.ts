import { Router } from 'express'
import ProfileController from '../controllers/profile.controller'

const router: Router = Router()

router.get('/profile', ProfileController.getAllProfiles)
router.get('/profile/:name', ProfileController.getProfileByName)
router.post('/profile', ProfileController.createProfile)
router.patch('/profile/:name', ProfileController.updateProfile)
router.delete('/profile/:name', ProfileController.deleteProfile)

//* TODO: work to support frontend application
// problem: upload image to S3 bucket and store url in db
// implementation: create endpoint that does that work
// code: router.get('/upload/:image', ProfileController.uploadProfileImage)

// implementation note: upload can happen as part of create in the service, service calls the upload endpoint if image is found,
// also lives as sepaerate endpoint if needed

export default router
