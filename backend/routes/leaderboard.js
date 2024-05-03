const express = require("express");
const { getTeams } = require("../controllers/leaderboardController");
const router = express.Router();

router.get("/getData", getTeams);

module.exports = router;
