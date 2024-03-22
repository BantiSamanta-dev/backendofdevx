import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  organizer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true, validate: { validator: function (endTime) { return endTime > this.startTime; }, message: 'End time must be after start time' } },
  location: { type: String, required: function () { return !this.virtualEvent; } },
  attendees: [{ type:Schema.Types.ObjectId, ref: 'User' }],
  registrationRequired: { type: Boolean, default: false },
  registrationLink: { type: String, required: function () { return this.registrationRequired; }, match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/ }, // Registration link must be a valid URL if required
  agenda: [{ type: String, required: true, maxlength: 100 }],
  virtualEvent: { type: Boolean, default: false }, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;