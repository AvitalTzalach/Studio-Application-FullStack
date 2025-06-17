import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import studioRoutes from './routes/studio.routes';
import serviceRoutes from './routes/service.routes';
import meetingRoutes from './routes/meeting.routes';
import authRoutes from './routes/auth.routes';

dotenv.config();
const app = express();
app.use(express.json());

// Use routes
app.use('/users', userRoutes);
app.use('/studios', studioRoutes);
app.use('/services', serviceRoutes);
app.use('/meetings', meetingRoutes);
app.use('/auth', authRoutes);

// DB + Server start omitted for brevity
// חיבור למסד הנתונים
const DB = process.env.MONGO_URI || 'mongodb://localhost:27017/StudioDB';
const PORT = process.env.PORT || 3000;

mongoose.connect(DB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
