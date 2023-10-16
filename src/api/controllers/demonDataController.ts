export {};
const asyncHandler = require("express-async-handler");
const demonService = require("../services/demonService.js");

const getDemonList = asyncHandler(
  async (req: any, res: { json: (arg0: any) => void }, next: any) => {
    console.log(process.env.DATABASE_URL);
    const data = await demonService.demonQuery(req.params.game);
    res.json(data);
  }
);

const getAffinities = asyncHandler(
  async (
    req: { params: { game: any } },
    res: { json: (arg0: any) => void },
    next: any
  ) => {
    const data = await demonService.affinitiesQuery(req.params.game);
    res.json(data);
  }
);

const getEvolutions = asyncHandler(
  async (
    req: { params: { game: any } },
    res: { json: (arg0: any) => void },
    next: any
  ) => {
    const data = await demonService.evolutionQuery(req.params.game);
    res.json(data);
  }
);

const getDemonListFromRace = asyncHandler(
  async (
    req: { params: { game: any; race: any } },
    res: { json: (arg0: any) => void },
    next: any
  ) => {
    const data = await demonService.demonQueryByRace(
      req.params.game,
      req.params.race
    );
    res.json(data);
  }
);

const getDemonFromName = asyncHandler(
  async (
    req: { params: { game: any; name: any } },
    res: { json: (arg0: any) => void },
    next: any
  ) => {
    const data = await demonService.demonQueryByName(
      req.params.game,
      req.params.name
    );
    res.json(data);
  }
);

const getDemonListFromSkills = asyncHandler(
  async (
    req: { params: { skills: string; game: any } },
    res: { json: (arg0: any) => void },
    next: any
  ) => {
    var skillNames = req.params.skills.split(",");
    console.log(skillNames);
    const data = await demonService.demonQueryBySkills(
      req.params.game,
      skillNames
    );
    res.json(data);
  }
);

const getOneDemonFromID = asyncHandler(
  async (req: any, res: { send: (arg0: string) => void }, next: any) => {
    res.send("NOT IMPLEMENTED");
  }
);

module.exports = {
  getAffinities,
  getDemonFromName,
  getDemonList,
  getDemonListFromRace,
  getDemonListFromSkills,
  getEvolutions,
  getOneDemonFromID,
};
