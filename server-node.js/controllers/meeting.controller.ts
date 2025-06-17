// import { Request, Response } from 'express';
// import * as meetingService from '../services/meeting.service';

// export const createMeeting = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const meeting = await meetingService.createMeeting(req.body);
//     res.status(201).json(meeting);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const getMeeting = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const meeting = await meetingService.getMeetingById(req.params.id);
//     if (!meeting) {
//       res.status(404).json({ message: 'Meeting not found' });
//       return;
//     }
//     res.json(meeting);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const getMeetings = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const meetings = await meetingService.getAllMeetings();
//     res.json(meetings);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const updateMeeting = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const meeting = await meetingService.updateMeeting(req.params.id, req.body);
//     if (!meeting) {
//       res.status(404).json({ message: 'Meeting not found' });
//       return;
//     }
//     res.json(meeting);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const deleteMeeting = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const meeting = await meetingService.deleteMeeting(req.params.id);
//     if (!meeting) {
//       res.status(404).json({ message: 'Meeting not found' });
//       return;
//     }
//     res.json({ message: 'Meeting deleted' });
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };


import { Request, Response, NextFunction } from 'express';
import * as meetingService from '../services/meeting.service';

export const createMeeting = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const meeting = await meetingService.createMeeting(req.body);
    res.status(201).json(meeting);
  } catch (error) {
    next(error);
  }
};

export const getMeeting = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const meeting = await meetingService.getMeetingById(req.params.id);
    if (!meeting) {
      const err = new Error('Meeting not found');
      (err as any).status = 404;
      throw err;
    }
    res.json(meeting);
  } catch (error) {
    next(error);
  }
};

export const getMeetings = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const meetings = await meetingService.getAllMeetings();
    res.json(meetings);
  } catch (error) {
    next(error);
  }
};

export const updateMeeting = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const meeting = await meetingService.updateMeeting(req.params.id, req.body);
    if (!meeting) {
      const err = new Error('Meeting not found');
      (err as any).status = 404;
      throw err;
    }
    res.json(meeting);
  } catch (error) {
    next(error);
  }
};

export const deleteMeeting = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const meeting = await meetingService.deleteMeeting(req.params.id);
    if (!meeting) {
      const err = new Error('Meeting not found');
      (err as any).status = 404;
      throw err;
    }
    res.json({ message: 'Meeting deleted' });
  } catch (error) {
    next(error);
  }
};

