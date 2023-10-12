import { type } from "os";

const Demon = require("../models/Demon");

const demonQuery = async (gameTitle: string) => {
  const data = await Demon.find({ game: gameTitle });
  console.log(Object.keys(data[40].skills));
  return data;
};

module.exports = {
  demonQuery,
};
