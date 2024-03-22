import mongoose from "mongoose";
const Schema = mongoose.Schema;

const progressTrackingSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to user model
    challengesCompleted: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }],
    learningMilestones: [{ type: String }],
    certifications: [{ type: String }],
    pointsEarned: { type: Number, default: 0 },
    // Add other fields as needed
  });
  
  const ProgressTracking = mongoose.model('ProgressTracking', progressTrackingSchema);
  
  module.exports = ProgressTracking;