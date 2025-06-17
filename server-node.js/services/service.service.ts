import { ServiceModel, IService } from '../models/service.model';

export const createService = async (data: Partial<IService>) => {
  const service = new ServiceModel(data);
  return service.save();
};

export const getServiceById = async (id: string) => {
  return ServiceModel.findById(id).exec();
};

export const getAllServices = async () => {
  return ServiceModel.find().exec();
};

export const updateService = async (id: string, update: Partial<IService>) => {
  return ServiceModel.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const deleteService = async (id: string) => {
  return ServiceModel.findByIdAndDelete(id).exec();
};
