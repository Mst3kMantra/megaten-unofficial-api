require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const routes = require("./src/api/routes/routes");

let conn = null;

app = express();

app.use(express.json());
app.use((req, res, next) => {
  try {
    if (conn == null) {
      console.log("CONNECTING TO DB");
      conn = mongoose.connect(process.env.DATABASE_URL);
      console.log("CONNECTED TO DB SUCCESSFULLY");
      next();
    } else {
      console.log("CONNECTED");
      next();
    }
  } catch (err) {
    next(err);
  }
});

app.use("/api", routes);
const PORT = 3000;

//app.listen(PORT, function (err) {
//  if (err) console.log("Error in server setup");
//  console.log("Server listening on Port", PORT);
//});

exports.default = app;
