import mongoose, { Schema, Model } from "mongoose";

interface SpecialFusions {
  recipe: { [key: string]: number };
  game: string;
}

const schema = new Schema<SpecialFusions, Model<SpecialFusions>>({
  recipe: {
    type: Schema.Types.Mixed,
  },
  game: {
    type: String,
    required: true,
  },
});

const myDB = mongoose.connection.useDb("megatenDB");

module.exports = myDB.model("SpecialFusions", schema, "specialFusionsData");
