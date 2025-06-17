// import { Request, Response } from 'express';
// import * as businessService from '../services/business.service';

// export const createBusiness = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const business = await businessService.createBusiness(req.body);
//     res.status(201).json(business);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const getBusiness = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const business = await businessService.getBusinessById(req.params.id);
//     if (!business) {
//       res.status(404).json({ message: 'Business not found' });
//       return;
//     }
//     res.json(business);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const getAllBusiness = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const businesses = await businessService.getAllBusiness();
//     res.json(businesses);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const updateBusiness = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const business = await businessService.updateBusiness(req.params.id, req.body);
//     if (!business) {
//       res.status(404).json({ message: 'Business not found' });
//       return;
//     }
//     res.json(business);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const deleteBusiness = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const business = await businessService.deleteBusiness(req.params.id);
//     if (!business) {
//       res.status(404).json({ message: 'Business not found' });
//       return;
//     }
//     res.json({ message: 'Business deleted' });
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

import { Request, Response, NextFunction } from 'express';
import * as businessService from '../services/business.service';

export const createBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const business = await businessService.createBusiness(req.body);
    res.status(201).json(business);
  } catch (error) {
    next(error);
  }
};

export const getBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const business = await businessService.getBusinessById(req.params.id);
    if (!business) {
      const err = new Error('Business not found');
      (err as any).status = 404;
      throw err;
    }
    res.json(business);
  } catch (error) {
    next(error);
  }
};

export const getAllBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const businesses = await businessService.getAllBusiness();
    res.json(businesses);
  } catch (error) {
    next(error);
  }
};

export const updateBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const business = await businessService.updateBusiness(req.params.id, req.body);
    if (!business) {
      const err = new Error('Business not found');
      (err as any).status = 404;
      throw err;
    }
    res.json(business);
  } catch (error) {
    next(error);
  }
};

export const deleteBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const business = await businessService.deleteBusiness(req.params.id);
    if (!business) {
      const err = new Error('Business not found');
      (err as any).status = 404;
      throw err;
    }
    res.json({ message: 'Business deleted' });
  } catch (error) {
    next(error);
  }
};

