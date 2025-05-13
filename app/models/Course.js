// models/Course.js
import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  description: { type: String },
  topics: [String],
  features: [String],
  learningOutcomes: [String],
  accreditation: {
    cityAndGuilds: Boolean,
    CPD: Boolean,
    RoSPA: Boolean,
  },
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
