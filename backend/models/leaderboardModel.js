const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
  avatar: {
    type: String,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  gamesPlayed: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

mongoose.model("leaderboardmodel", leaderboardSchema);
