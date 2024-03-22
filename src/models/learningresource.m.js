import mongoose from "mongoose";
const Schema = mongoose.Schema;

const learningResourceSchema = new mongoose.Schema ({
    title:{type:String , requried:true},
    discription:{type:String},
    type: { type: String, enum: ['article', 'video', 'tutorial', 'book', 'course', 'podcast', 'other'], default: 'article' },
    category:{type:String},
    author:{type:String},
    url:{type:String},
    metadate:{type: Schema.Types.Mixed},
    points:{type: Number, default: 0},
    isPaid:{type:Boolean , default:false},


   
})

const LearningResource = mongoose.model('LearningResource', learningResourceSchema);

module.exports = LearningResource;