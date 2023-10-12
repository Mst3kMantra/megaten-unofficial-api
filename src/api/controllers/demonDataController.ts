import asyncHandler from "express-async-handler";
import { IDemon } from "../interfaces/IDemon";
const demonService = require("../services/demonService");

exports.getDemonList = asyncHandler(async (req, res, next) => {
  const data = await demonService.demonQuery(req.params.game);
  res.json(data);
});

exports.getDemonListFromRace = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

exports.getOneDemon = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

exports.getDemonListFromSkills = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});

exports.getOneDemonFromID = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED");
});
