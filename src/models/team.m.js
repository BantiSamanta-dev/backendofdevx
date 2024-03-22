import mongoose from "mongoose";
const Schema = mongoose.Schema;

const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    projects: [{ type: Schema.Types.ObjectId, ref: 'ProjectEntry' }], 
    communicationChannels: [{ type: String }], 
    taskBoards: [{ type: Schema.Types.ObjectId, ref: 'TaskBoard' }], 
    versionControl: { type: String }, 
    pairProgrammingTools: [{ type: String }], 
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  const Team = mongoose.model('Team', teamSchema);
  
  module.exports = Team;