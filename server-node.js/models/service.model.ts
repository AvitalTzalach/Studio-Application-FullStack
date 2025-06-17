import { Schema, model, Document } from 'mongoose';

export interface IService extends Document {
    title: string;
    description?: string;
    price: number;
    durationMinutes: number;
}

const serviceSchema = new Schema<IService>({
    title: {
        type: String,
        required: true
    },
    description: { 
        type: String, 
        required: false 
    },
    price: { 
        type: Number, 
        required: true 
    },
    durationMinutes: { 
        type: Number, 
        required: true 
    }
}, { timestamps: true });

export const ServiceModel = model<IService>('Service', serviceSchema);