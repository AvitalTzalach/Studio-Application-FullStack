import express from 'express';
import * as meetingController from '../controllers/meeting.controller';
import { authorizeAdmin } from '../middleware/role.middleware';

const router = express.Router();

router.post('/', meetingController.createMeeting);
router.get('/', meetingController.getMeetings);
router.get('/:id', meetingController.getMeeting);
router.put('/:id',authorizeAdmin, meetingController.updateMeeting);
router.delete('/:id', meetingController.deleteMeeting);

export default router;
