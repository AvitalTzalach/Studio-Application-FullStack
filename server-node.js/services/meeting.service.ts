import MeetingModel, { IMeeting } from '../models/meeting.model';

export const createMeeting = async (data: Partial<IMeeting>) => {
  const meeting = new MeetingModel(data);
  return meeting.save();
};

export const getMeetingById = async (id: string) => {
  return MeetingModel.findById(id).populate('serviceId').exec();
};

export const getAllMeetings = async () => {
  return MeetingModel.find().populate('serviceId').exec();
};

export const updateMeeting = async (id: string, update: Partial<IMeeting>) => {
  return MeetingModel.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const deleteMeeting = async (id: string) => {
  return MeetingModel.findByIdAndDelete(id).exec();
};
