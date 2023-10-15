import mongoose, { Schema, Model } from "mongoose";

interface FusionChart {
  races: string[];
  table: string[];
  game: string;
}

const schema = new Schema<FusionChart, Model<FusionChart>>({
  races: {
    type: [String],
  },
  table: {
    type: [[String]],
  },
  game: {
    required: true,
    type: String,
  },
});

const myDB = mongoose.connection.useDb("megatenDB");

module.exports = myDB.model("FusionChart", schema, "fusionChartData");
