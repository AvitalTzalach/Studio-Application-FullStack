import StudioModel, { IStudio } from '../models/studio.model';

export const createStudio = async (data: Partial<IStudio>) => {
  const studio = new StudioModel(data);
  return studio.save();
};

export const getStudioById = async (id: string) => {
  return StudioModel.findById(id).populate('owner').exec();
};

export const getAllStudios = async () => {
  return StudioModel.find().populate('owner').exec();
};

export const updateStudio = async (id: string, update: Partial<IStudio>) => {
  return StudioModel.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const deleteStudio = async (id: string) => {
  return StudioModel.findByIdAndDelete(id).exec();
};
