export {};
const fusionService = require("../services/fusionService.js");
const asyncHandler = require("express-async-handler");

const getFusionChart = asyncHandler(
  async (
    req: { params: { game: any } },
    res: { json: (arg0: any) => void },
    next: any
  ) => {
    const data = await fusionService.fusionChartQuery(req.params.game);
    res.json(data);
  }
);

const getFusionPrereqs = asyncHandler(
  async (
    req: { params: { game: any } },
    res: { json: (arg0: any) => void },
    next: any
  ) => {
    const data = await fusionService.fusionPrereqsQuery(req.params.game);
    res.json(data);
  }
);

const getSpecialFusions = asyncHandler(
  async (
    req: { params: { game: any } },
    res: { json: (arg0: any) => void },
    next: any
  ) => {
    const data = await fusionService.specialFusionsQuery(req.params.game);
    res.json(data);
  }
);

const getElementChart = asyncHandler(
  async (
    req: { params: { game: any } },
    res: { json: (arg0: any) => void },
    next: any
  ) => {
    const data = await fusionService.elementChartQuery(req.params.game);
    res.json(data);
  }
);

module.exports = {
  getElementChart,
  getFusionChart,
  getFusionPrereqs,
  getSpecialFusions,
};
