import { Router } from 'express';
import ApiController from '../controllers/api.controller';

const router: Router = Router();

router.get('/', ApiController.getData);
router.post('/add-data', ApiController.addData);
router.put('/edit-data/:id', ApiController.updateData);
router.delete('/delete-data/:id', ApiController.deleteData);

export default router;
