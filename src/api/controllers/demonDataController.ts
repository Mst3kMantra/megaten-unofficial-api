import asyncHandler from "express-async-handler";
const demonService = require("../services/demonService");

exports.getDemonList = asyncHandler(async (req, res, next) => {
  const data = await demonService.demonQuery(req.params.game);
  res.json(data);
});

exports.getDemonListFromRace = asyncHandler(async (req, res, next) => {
  const data = await demonService.demonQueryByRace(
    req.params.game,
    req.params.race
  );
  res.json(data);
});

exports.getDemonFromName = asyncHandler(async (req, res, next) => {
  const data = await demonService.demonQueryByName(
    req.params.game,
    req.params.name
  );
  res.json(data);
});

exports.getDemonListFromSkills = asyncHandler(async (req, res, next) => {
  var skillNames = req.params.skills.split(",");
  console.log(skillNames);
  const data = await demonService.demonQueryBySkills(
    req.params.game,
    skillNames
  );
  res.json(data);
});

exports.getOneDemonFromID = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});
