import { Request, RequestHandler, Response } from 'express';
import User from '../models/user.model';
import { generateToken } from '../utils/jwt';

export const signUp: RequestHandler = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json({ message: 'User created' });
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  };
  

  export const signIn: RequestHandler = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      res.status(401).json({ message: 'Invalid credentials' });
      return; 
    }
  
    const token = generateToken(user._id.toString(), user.role);
    res.json({ token, user: { id: user._id, email: user.email, userName: user.userName, role: user.role } });
  };
  




