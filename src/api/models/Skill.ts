import mongoose, { Schema, Model } from "mongoose";

interface ISkill {
  name: string;
  damage?: string;
  cost: number;
  elem: string;
  power?: number;
  rank?: number;
  target: string;
  effect?: string;
  requires?: string;
  card?: string;
  unique?: string;
  game: string;
}

const schema = new Schema<ISkill, Model<ISkill>>({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
  },
  elem: {
    type: String,
  },
  target: {
    type: String,
  },
  game: {
    required: true,
    type: String,
  },
});

const myDB = mongoose.connection.useDb("megatenDB");

module.exports = myDB.model("Skill", schema, "skillData");
