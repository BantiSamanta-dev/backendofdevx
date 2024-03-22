import mongoose, { Schema } from "mongoose";
const Schema = mongoose.Schema;


const postSchema = new mongoose.Schema({
    title:{type:String, required:true    },
    content:{type:String , required:true},// type change later !!!
    author: {type:Schema.Types.ObjectId, ref:'User', required:true},
    createAt:{type:Date ,default:Date.now},
    updateAt:{type:Date ,default:Date.now},
    tags:[{type:String}],
    likes:[{type:Schema.Types.ObjectId, ref:'User'}],
    comments:[{type:Schema.Types.ObjectId, ref:'Comment'}],



})

const Post = mongoose.model('Post',postSchema)

module.exports = Post