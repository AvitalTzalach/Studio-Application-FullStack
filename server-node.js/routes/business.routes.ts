import express from 'express';
import * as studioController from '../controllers/business.controller';
import { authorizeAdmin } from '../middleware/role.middleware';

const router = express.Router();

router.post('/',authorizeAdmin, studioController.createBusiness);
router.get('/', studioController.getAllBusiness);
router.get('/:id', studioController.getBusiness);
router.put('/:id', studioController.updateBusiness);
router.delete('/:id', studioController.deleteBusiness);

export default router;
