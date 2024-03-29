export {};
const asyncHandler = require("express-async-handler");
const skillService = require("../services/skillService.js");

const getSkillList = asyncHandler(
  async (
    req: { params: { game: any } },
    res: { json: (arg0: any) => void },
    next: any
  ) => {
    const data = await skillService.skillQuery(req.params.game);
    res.json(data);
  }
);

module.exports = {
  getSkillList,
};
