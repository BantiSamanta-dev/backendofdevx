import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tagSchema = new mongoose.Schema({
    name:{type:String,required:true, unique:true},
    description: {type:String}
})

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;