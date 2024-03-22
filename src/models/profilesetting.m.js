import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSettingsSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
  privacySettings: {
    type: {
      profileVisibility: { type: String, enum: ['public', 'private'], default: 'public' },
      emailVisibility: { type: String, enum: ['public', 'private'], default: 'private' },
      
    },
    default: {},
  },
  notificationSettings: {
    type: {
      emailNotifications: { type: Boolean, default: true },
      pushNotifications: { type: Boolean, default: true },
      
    },
    default: {},
  },
  theme: { type: String, default: 'light' },
  username: { type: String }, 
  password: { type: String }, 
  socialMedia: {
    type: {
      github: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
      website:{ type: String},
      
    },
    default: {},
  },
  
});

const ProfileSettings = mongoose.model('ProfileSettings', profileSettingsSchema);

module.exports = ProfileSettings;
