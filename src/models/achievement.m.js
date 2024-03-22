import mongoose, { Schema } from "mongoose";
const Schema = mongoose.Schema;
const achievementSchema = new mongoose.Schema({
    userId :{ type : Schema.Types.ObjectId, ref: 'User', required:true},
    title :{type :String ,required:true},
    discription:{type:String},
    badge: { type: String },
     points: { type: Number, default: 0 },

     //if we nweed we add fields
})

const Achievement = mongoose.model('Achievement' , achievementSchema)
module.exports = Achievement