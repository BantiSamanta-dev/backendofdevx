import mongoose from "mongoose";
const Schema = mongoose.Schema;
const answerSchema = new mongoose.Schema({
    content:{type:String, required:true},
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    question: { type: Schema.Types.ObjectId, ref: 'Question', required: true }, 
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
    accepted: { type: Boolean, default: false }, 
})


const Answer = mongoose.model('Answer', answerSchema)
module.exports = Answer