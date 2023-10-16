"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fusionService = require("../services/fusionService.js");
const asyncHandler = require("express-async-handler");
const getFusionChart = asyncHandler(async (req, res, next) => {
    const data = await fusionService.fusionChartQuery(req.params.game);
    res.json(data);
});
const getFusionPrereqs = asyncHandler(async (req, res, next) => {
    const data = await fusionService.fusionPrereqsQuery(req.params.game);
    res.json(data);
});
const getSpecialFusions = asyncHandler(async (req, res, next) => {
    const data = await fusionService.specialFusionsQuery(req.params.game);
    res.json(data);
});
const getElementChart = asyncHandler(async (req, res, next) => {
    const data = await fusionService.elementChartQuery(req.params.game);
    res.json(data);
});
module.exports = {
    getElementChart,
    getFusionChart,
    getFusionPrereqs,
    getSpecialFusions,
};
