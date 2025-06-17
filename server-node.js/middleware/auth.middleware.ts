import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate: RequestHandler = (req, res, next) => {
    const authHeader = req.headers.authorization; // Bearer <token>
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Missing or invalid token' });
      return;
    }
  
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      (req as any).user = decoded; // נשמור את המשתמש בתוך הבקשה
      next();
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
  