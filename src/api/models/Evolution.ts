import mongoose, { Schema, Model } from "mongoose";

interface Evolution {
  lvl: number;
  result: string;
  game: string;
}

const schema = new Schema<Evolution, Model<Evolution>>({
  lvl: {
    type: Number,
  },
  result: {
    type: String,
  },
  game: {
    type: String,
  },
});

const myDB = mongoose.connection.useDb("megatenDB");

module.exports = myDB.model("Evolution", schema, "evolutionData");
