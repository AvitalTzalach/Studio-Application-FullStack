import express from 'express';
import * as serviceController from '../controllers/service.controller';

const router = express.Router();

router.post('/', serviceController.createService);
router.get('/', serviceController.getServices);
router.get('/:id', serviceController.getService);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

export default router;
