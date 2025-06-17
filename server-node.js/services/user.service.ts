import UserModel, { IUser } from '../models/user.model';

export const createUser = async (data: Partial<IUser>) => {
  const user = new UserModel(data);
  return user.save();
};

export const getUserById = async (id: string) => {
  return UserModel.findById(id).exec();
};

export const getAllUsers = async () => {
  return UserModel.find().exec();
};

export const updateUser = async (id: string, update: Partial<IUser>) => {
  return UserModel.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const deleteUser = async (id: string) => {
  return UserModel.findByIdAndDelete(id).exec();
};
