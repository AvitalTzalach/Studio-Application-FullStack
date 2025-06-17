import express from 'express';
import * as studioController from '../controllers/studio.controller';

const router = express.Router();

router.post('/', studioController.createStudio);
router.get('/', studioController.getStudios);
router.get('/:id', studioController.getStudio);
router.put('/:id', studioController.updateStudio);
router.delete('/:id', studioController.deleteStudio);

export default router;
