const FusionChart = require("../models/FusionChart.js");
const ElementChart = require("../models/ElementChart.js");
const SpecialFusions = require("../models/SpecialFusions.js");
const FusionPrereqs = require("../models/FusionPrereqs.js");

const fusionChartQuery = async (gameTitle: string) => {
  const data = await FusionChart.find({ game: gameTitle });
  return data;
};

const elementChartQuery = async (gameTitle: string) => {
  const data = await ElementChart.find({ game: gameTitle });
  return data;
};

const specialFusionsQuery = async (gameTitle: string) => {
  const data = await SpecialFusions.find({ game: gameTitle });
  return data;
};

const fusionPrereqsQuery = async (gameTitle: string) => {
  const data = await FusionPrereqs.find({ game: gameTitle });
  return data;
};

module.exports = {
  fusionChartQuery,
  elementChartQuery,
  specialFusionsQuery,
  fusionPrereqsQuery,
};
