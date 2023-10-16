"use strict";
const Skill = require("../models/Skill.js");
const skillQuery = async (gameTitle) => {
    const data = await Skill.find({ game: gameTitle });
    return data;
};
module.exports = {
    skillQuery,
};
