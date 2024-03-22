import mongoose, { Schema } from "mongoose";
const Schema = mongoose.Schema;


const commentSchema = new mongoose.Schema({
    content:{type:String, required:true},
    author:{type:String},
    createAt:{type:Date ,default:Date.now},
    updateAt:{type:Date ,default:Date.now},
    likes:{type:Schema.Types.ObjectId ,ref:'User'},
    replies:{type:Schema.Types.ObjectId , ref:'Comment'},
    post:{type:Schema.Types.ObjectId , ref:'Post',required:true}
})  

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment