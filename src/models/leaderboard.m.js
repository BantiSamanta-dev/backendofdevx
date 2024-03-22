import mongoose from "mongoose";
const Schema = mongoose.Schema;



const leaderboardRankingSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
    points: { type: Number, default: 0 },
    challengesCompleted: { type: Number, default: 0 },
    contributionsCount: { type: Number, default: 0 },
   
  });
  
  const LeaderboardRanking = mongoose.model('LeaderboardRanking', leaderboardRankingSchema);
  
  module.exports = LeaderboardRanking;