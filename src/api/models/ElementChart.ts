import mongoose, { Schema, Model } from "mongoose";

interface ElementChart {
  elems: string[];
  races: string[];
  table: number[];
  game: string;
}

const schema = new Schema<ElementChart, Model<ElementChart>>({
  elems: {
    type: [String],
  },
  races: {
    type: [String],
  },
  table: {
    type: [[Number]],
  },
  game: {
    required: true,
    type: String,
  },
});

const myDB = mongoose.connection.useDb("megatenDB");

module.exports = myDB.model("ElementChart", schema, "elementChartData");
