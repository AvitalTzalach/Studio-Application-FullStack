import { Request, Response } from 'express';
import * as studioService from '../services/studio.service';

export const createStudio = async (req: Request, res: Response): Promise<void> => {
  try {
    const studio = await studioService.createStudio(req.body);
    res.status(201).json(studio);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getStudio = async (req: Request, res: Response): Promise<void> => {
  try {
    const studio = await studioService.getStudioById(req.params.id);
    if (!studio) {
      res.status(404).json({ message: 'Studio not found' });
      return;
    }
    res.json(studio);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getStudios = async (req: Request, res: Response): Promise<void> => {
  try {
    const studios = await studioService.getAllStudios();
    res.json(studios);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateStudio = async (req: Request, res: Response): Promise<void> => {
  try {
    const studio = await studioService.updateStudio(req.params.id, req.body);
    if (!studio) {
      res.status(404).json({ message: 'Studio not found' });
      return;
    }
    res.json(studio);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteStudio = async (req: Request, res: Response): Promise<void> => {
  try {
    const studio = await studioService.deleteStudio(req.params.id);
    if (!studio) {
      res.status(404).json({ message: 'Studio not found' });
      return;
    }
    res.json({ message: 'Studio deleted' });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
