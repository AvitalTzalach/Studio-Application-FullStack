// import { Request, Response } from 'express';
// import * as userService from '../services/user.service';

// export const createUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const user = await userService.createUser(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const getUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const user = await userService.getUserById(req.params.id);
//     if (!user) {
//       const error = new Error('User not found');
//       (error as any).statusCode = 404;
//       throw error;
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const getUsers = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const users = await userService.getAllUsers();
//     res.json(users);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const updateUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const user = await userService.updateUser(req.params.id, req.body);
//     if (!user) {
//       res.status(404).json({ message: 'User not found' });
//       return;
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const deleteUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const user = await userService.deleteUser(req.params.id);
//     if (!user) {
//       res.status(404).json({ message: 'User not found' });
//       return;
//     }
//     res.json({ message: 'User deleted' });
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };


import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      const err = new Error('User not found');
      (err as any).status = 404;
      throw err;
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
      const err = new Error('User not found');
      (err as any).status = 404;
      throw err;
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await userService.deleteUser(req.params.id);
    if (!user) {
      const err = new Error('User not found');
      (err as any).status = 404;
      throw err;
    }
    res.json({ message: 'User deleted' });
  } catch (error) {
    next(error);
  }
};
