import mongoose, { Schema } from "mongoose";
const Schema = mongoose.Schema;

const Tag = mongoose.model('Tag')
const  Comment = mongoose.model('CommentC')


const projectEntrySchema = new mongoose.Schema({
    title:{type:String,required:true},
    discription:{ type:String,required:true},
    author:{type:Schema.Types.ObjectId, ref:'User',required:true},
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    screenshots: [{ type: String }], // URLs of screenshots for the project
  demoVideo: { type: String }, // URL of the demo video for the project
  codeRepository: { type: String }, 
  deployedLink: { type: String }, 
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
  comments: [{ type: Schema.Types.ObjectId, ref: 'CommentC' }], 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})
const ProjectEntry = mongoose.model('ProjectEntry', projectEntrySchema);

module.exports = ProjectEntry;