const mongoose = require("mongoose");

const leaderboard = mongoose.model("leaderboardmodel");

//get all teams
const getTeams = async (req, res) => {
  const teams = await leaderboard.find().sort({ score: -1 });
  res.status(200).json(teams);
};

module.exports = { getTeams };
