import mongoose, { Schema, Model } from "mongoose";

interface Affinity {
  elements: { [key: string]: string };
  costs: { [key: string]: number[] };
  upgrades: { [key: string]: number[] };
  game: string;
}

const schema = new Schema<Affinity, Model<Affinity>>({
  elements: {
    type: Schema.Types.Mixed,
  },
  costs: {
    type: Schema.Types.Mixed,
  },
  upgrades: {
    type: Schema.Types.Mixed,
  },
  game: {
    type: String,
    required: true,
  },
});

const myDB = mongoose.connection.useDb("megatenDB");

module.exports = myDB.model("Affinity", schema, "affinityData");
