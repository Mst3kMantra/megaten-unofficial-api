require("dotenv").config();

export const express = require("express");
export const mongoose = require("mongoose");
export const mongoString = process.env.DATABASE_URL;

export const routes = require("./api/routes/routes");

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on("error", (error: string) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
