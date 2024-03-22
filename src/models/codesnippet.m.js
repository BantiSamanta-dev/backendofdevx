import mongoose, { Schema } from "mongoose";
const Schema = mongoose.Schema;

const codeSnippetSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    language: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'CommentC' }],
    versions: [{ 
      content: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    }],
    visibility:{type:String , enum :['public','private'],default:'public'},
    ratings:[{
        user:{type:Schema.Types.ObjectId, ref:'User', required:true},
        rating:{type:Number, min:1 ,Max:5},
    }],
    createAt:{type:Date,default:Date.now},
    updateAt:{type:Date,default:Date.now}
})
const CodeSnippet = mongoose.model('CodeSnippet', codeSnippetSchema);

module.exports = CodeSnippet;