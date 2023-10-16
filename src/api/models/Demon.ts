import mongoose, { Schema, Model } from "mongoose";
import { IDemon } from "../interfaces/IDemon.js";

const schema = new Schema<IDemon, Model<IDemon>>({
  affinities: {
    type: [Number],
  },
  ailments: {
    type: String,
  },
  lvl: {
    type: Number,
  },
  price: {
    type: Number,
  },
  race: {
    type: String,
  },
  resists: {
    type: String,
  },
  skills: {
    type: Schema.Types.Mixed,
    required: true,
  },
  stats: {
    type: [Number],
  },
  name: {
    required: true,
    type: String,
  },
  game: {
    required: true,
    type: String,
  },
});

const myDB = mongoose.connection.useDb("megatenDB");

module.exports = myDB.model("Demon", schema, "demonData");
