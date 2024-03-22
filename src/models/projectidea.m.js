import mongoose from "mongoose"
const Schema = mongoose.Schema;;

const projectIdeaSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'CommentC' }],
    visibility: { type: String, enum: ['public', 'private'], default: 'public' },
    status: { type: String, enum: ['pending', 'inProgress', 'completed'], default: 'pending' }, // Project idea status
    images: [{ type: String }], // URLs of images related to the project idea
    attachments: [{ type: String }], // URLs of attachments related to the project idea
    ratings: [{ 
      user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      rating: { type: Number, min: 1, max: 5 },
    }],
    contributors: [{ type: Schema.Types.ObjectId, ref: 'User' }], // References to contributors for the project idea
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });

const ProjectIdea = mongoose.model('ProjectIdea', projectIdeaSchema);

module.exports = ProjectIdea;