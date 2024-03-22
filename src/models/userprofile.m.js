import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userProfileSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    roles: [{ type: String, enum: ['user', 'admin'], default: 'user' }],
    fullName: { type: String, required: true },
    bio: { type: String },
    profilePicture: { type: String },
    skills: [{ type: String }],
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    contributions: [{ type: Schema.Types.ObjectId, ref: 'Contribution' }],
    achievements: [{ type: Schema.Types.ObjectId, ref: 'Achievement' }],
    points: { type: Number, default: 0 },
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    website:{ type: String },
    resume: { type: String },
    completedChallenges: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }],
    completedCourses: [{ type: Schema.Types.ObjectId, ref: 'LearningResource' }],
    

    //if we need any field show in profile we add soon !!

})

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;