import express from 'express';
import * as meetingController from '../controllers/meeting.controller';

const router = express.Router();

router.post('/', meetingController.createMeeting);
router.get('/', meetingController.getMeetings);
router.get('/:id', meetingController.getMeeting);
router.put('/:id', meetingController.updateMeeting);
router.delete('/:id', meetingController.deleteMeeting);

export default router;
