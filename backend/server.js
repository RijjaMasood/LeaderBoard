require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("./models/leaderboardModel");

const leaderboardRoutes = require("./routes/leaderboard");

//express app
const app = express();
app.use(cors());

//middleware
app.use(bodyParser.json()); //for attaching req body

// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

//route
app.use(leaderboardRoutes);

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for reqs
    app.listen(process.env.PORT, () => {
      console.log("connected to DB & listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
