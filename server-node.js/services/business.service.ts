import BusinessModel, { IBusiness } from '../models/business.model';

export const createBusiness = async (data: Partial<IBusiness>) => {
  const business = new BusinessModel(data);
  return business.save();
};

export const getBusinessById = async (id: string) => {
  return BusinessModel.findById(id).populate('owner').exec();
};

export const getAllBusiness = async () => {
  return BusinessModel.find().populate('owner').exec();
};

export const updateBusiness = async (id: string, update: Partial<IBusiness>) => {
  return BusinessModel.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const deleteBusiness = async (id: string) => {
  return BusinessModel.findByIdAndDelete(id).exec();
};
