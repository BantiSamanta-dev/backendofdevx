import mongoose from "mongoose";
const Schema = mongoose.Schema;

const notificationSchema = new mongoose.Schema({
  recipient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  type: { type: String, enum: ['info', 'warning', 'success', 'error'], default: 'info' },
  status: { type: String, enum: ['unread', 'read'], default: 'unread' },
  trigger: { type: String, required: true }, 
  action: { type: String }, 
  metadata: { type: Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;