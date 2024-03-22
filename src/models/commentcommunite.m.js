import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentsCommuniteSchema = new mongoose.Schema({
    content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
  codeSnippet: { type:Schema.Types.ObjectId, ref: 'CodeSnippet', required: true }, // Reference to Code Snippet model
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const CommentC = mongoose.model('CommentC', commentsCommuniteSchema)

module.exports = CommentC