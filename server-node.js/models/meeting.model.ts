import mongoose, { Schema, Document } from 'mongoose';

// ממשק פנימי למונגו
export interface IMeeting extends Document {
    serviceId: mongoose.Types.ObjectId;
    clientEmails: string[];
    startTime: Date;
    endTime: Date;
}

const meetingSchema = new Schema<IMeeting>({
    serviceId: {
        type: Schema.Types.ObjectId,
        ref: 'Service',
        required: true,
    },
    clientEmails: {
        type: [String],
        required: true,
        validate: {
            validator: (emails: string[]) => emails.length > 0,
            message: 'חייב להיות לפחות לקוח אחד בפגישה',
        },
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
        validate: {
            validator: function (this: IMeeting) {
                return this.endTime > this.startTime;
            },
            message: 'זמן הסיום חייב להיות אחרי זמן ההתחלה',
        },
    },
}, {
    timestamps: true, // מוסיף createdAt ו-updatedAt אוטומטית
});

// יצירת המודל
const MeetingModel = mongoose.model<IMeeting>('Meeting', meetingSchema);

export default MeetingModel;
