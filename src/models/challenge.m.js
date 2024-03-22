import mongoose from "mongoose";

const Schema = mongoose.Schema;
const challengeSchema = new mongoose.Schema({
    title:{type:String , required : true},
    description:{type:String},
    difficulty:{type: String , enum :['easy','medium','hard'],default:'medium', required:true},
    category:{type: String},
    points:{type: Number},
    metadata: {type:Schema.Types.Mixed},
    createdBy: {type:Schema.Types.ObjectId , ref:'User', required:true},

})

const Challenge = mongoose.model('Challenge', challengeSchema)
export default Challenge