import asyncHandler from "express-async-handler";
const fusionService = require("../services/fusionService");

exports.getFusionChart = asyncHandler(async (req, res, next) => {
  const data = await fusionService.fusionChartQuery(req.params.game);
  res.json(data);
});

exports.getFusionPrereqs = asyncHandler(async (req, res, next) => {
  const data = await fusionService.fusionPrereqsQuery(req.params.game);
  res.json(data);
});

exports.getSpecialFusions = asyncHandler(async (req, res, next) => {
  const data = await fusionService.specialFusionsQuery(req.params.game);
  res.json(data);
});

exports.getElementChart = asyncHandler(async (req, res, next) => {
  const data = await fusionService.elementChartQuery(req.params.game);
  res.json(data);
});
