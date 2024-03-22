
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: { type: Schema.Types.ObjectId },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    roles: { type: [String], enum: ['user', 'admin'], default: ['user'] },
    fullName: { type: String, required: true },
    bio: { type: String },
});

const User = mongoose.model('User', userSchema);

export default User;
