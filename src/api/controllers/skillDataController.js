"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncHandler = require("express-async-handler");
const skillService = require("../services/skillService.js");
const getSkillList = asyncHandler(async (req, res, next) => {
    const data = await skillService.skillQuery(req.params.game);
    res.json(data);
});
module.exports = {
    getSkillList,
};
