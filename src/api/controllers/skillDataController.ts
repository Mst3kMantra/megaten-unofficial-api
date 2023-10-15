import asyncHandler from "express-async-handler";
const skillService = require("../services/skillService");

exports.getSkillList = asyncHandler(async (req, res, next) => {
  const data = await skillService.skillQuery(req.params.game);
  res.json(data);
});
