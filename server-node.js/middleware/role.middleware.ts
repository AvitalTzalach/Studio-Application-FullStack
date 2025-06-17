import { Response, NextFunction } from 'express';

export const authorizeAdmin = (req: any, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};