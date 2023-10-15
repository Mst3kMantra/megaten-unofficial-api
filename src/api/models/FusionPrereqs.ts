import mongoose, { Schema, Model } from "mongoose";

interface FusionPrereqs {
  name: { [key: string]: string };
  game: string;
}

const schema = new Schema<FusionPrereqs, Model<FusionPrereqs>>({
  name: {
    type: Schema.Types.Mixed,
  },
  game: {
    type: String,
    required: true,
  },
});

const myDB = mongoose.connection.useDb("megatenDB");

module.exports = myDB.model("FusionPrereqs", schema, "fusionPrereqsData");
