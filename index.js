require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

const routes = require("./src/api/routes/routes");

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(express.json());

app.use("/api", routes);

const PORT = 3000;

//app.listen(PORT, function (err) {
//  if (err) console.log("Error in server setup");
//  console.log("Server listening on Port", PORT);
//});

module.exports = {
  app,
};
