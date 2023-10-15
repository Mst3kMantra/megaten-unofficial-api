const Skill = require("../models/Skill");

const skillQuery = async (gameTitle: string) => {
  const data = await Skill.find({ game: gameTitle });
  return data;
};

module.exports = {
  skillQuery,
};
