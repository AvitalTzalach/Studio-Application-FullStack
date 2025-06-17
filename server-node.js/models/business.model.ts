import mongoose, { Document, Schema } from 'mongoose';

export interface IBusiness extends Document {
  name: string;
  location: string;
  phone: string;
  email: string;
  hours: string;
  owner: mongoose.Types.ObjectId;
}

const BusinessSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  hours: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true, // מוסיף createdAt ו-updatedAt
});

export default mongoose.model<IBusiness>('Business', BusinessSchema);
