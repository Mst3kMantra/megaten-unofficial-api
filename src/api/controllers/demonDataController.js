"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncHandler = require("express-async-handler");
const demonService = require("../services/demonService.js");
const getDemonList = asyncHandler(async (req, res, next) => {
    const data = await demonService.demonQuery(req.params.game);
    res.json(data);
});
const getAffinities = asyncHandler(async (req, res, next) => {
    const data = await demonService.affinitiesQuery(req.params.game);
    res.json(data);
});
const getEvolutions = asyncHandler(async (req, res, next) => {
    const data = await demonService.evolutionQuery(req.params.game);
    res.json(data);
});
const getDemonListFromRace = asyncHandler(async (req, res, next) => {
    const data = await demonService.demonQueryByRace(req.params.game, req.params.race);
    res.json(data);
});
const getDemonFromName = asyncHandler(async (req, res, next) => {
    const data = await demonService.demonQueryByName(req.params.game, req.params.name);
    res.json(data);
});
const getDemonListFromSkills = asyncHandler(async (req, res, next) => {
    var skillNames = req.params.skills.split(",");
    console.log(skillNames);
    const data = await demonService.demonQueryBySkills(req.params.game, skillNames);
    res.json(data);
});
const getOneDemonFromID = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED");
});
module.exports = {
    getAffinities,
    getDemonFromName,
    getDemonList,
    getDemonListFromRace,
    getDemonListFromSkills,
    getEvolutions,
    getOneDemonFromID,
};
