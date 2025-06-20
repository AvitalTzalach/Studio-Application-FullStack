// import { Request, Response } from 'express';
// import * as serviceService from '../services/service.service';

// export const createService = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const service = await serviceService.createService(req.body);
//     res.status(201).json(service);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const getService = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const service = await serviceService.getServiceById(req.params.id);
//     if (!service) {
//       res.status(404).json({ message: 'Service not found' });
//       return;
//     }
//     res.json(service);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const getServices = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const services = await serviceService.getAllServices();
//     res.json(services);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const updateService = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const service = await serviceService.updateService(req.params.id, req.body);
//     if (!service) {
//       res.status(404).json({ message: 'Service not found' });
//       return;
//     }
//     res.json(service);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// export const deleteService = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const service = await serviceService.deleteService(req.params.id);
//     if (!service) {
//       res.status(404).json({ message: 'Service not found' });
//       return;
//     }
//     res.json({ message: 'Service deleted' });
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

import { Request, Response, NextFunction } from 'express';
import * as serviceService from '../services/service.service';

export const createService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const service = await serviceService.createService(req.body);
    res.status(201).json(service);
  } catch (error) {
    next(error);
  }
};

export const getService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const service = await serviceService.getServiceById(req.params.id);
    if (!service) {
      const err = new Error('Service not found');
      (err as any).status = 404;
      throw err;
    }
    res.json(service);
  } catch (error) {
    next(error);
  }
};

export const getServices = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const services = await serviceService.getAllServices();
    res.json(services);
  } catch (error) {
    next(error);
  }
};

export const updateService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const service = await serviceService.updateService(req.params.id, req.body);
    if (!service) {
      const err = new Error('Service not found');
      (err as any).status = 404;
      throw err;
    }
    res.json(service);
  } catch (error) {
    next(error);
  }
};

export const deleteService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const service = await serviceService.deleteService(req.params.id);
    if (!service) {
      const err = new Error('Service not found');
      (err as any).status = 404;
      throw err;
    }
    res.json({ message: 'Service deleted' });
  } catch (error) {
    next(error);
  }
};
