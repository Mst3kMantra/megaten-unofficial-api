import { express as ex } from "../../index";
const Demon = require("../models/Demon");
const router = ex.Router();

const demonDataController = require("../controllers/demondataController");
const skillDataController = require("../controllers/skillDataController");
const fusionController = require("../controllers/fusionController");

module.exports = router;

//All requests must include game title in url

//Get all Demons Method
router.get("/getDemons/:game", demonDataController.getDemonList);

//Get by Race Method
router.get(
  "/getDemonsByRace/:game/:race",
  demonDataController.getDemonListFromRace
);

//Get by Name Method
router.get("/getDemonByName/:game/:name", demonDataController.getDemonFromName);

//Get by Skills Method
router.get(
  "/getDemonsBySkills/:game/:skills",
  demonDataController.getDemonListFromSkills
);

//Get all Affinities Method
router.get("/getAffinities/:game", demonDataController.getAffinities);

//Get all Skills Method
router.get("/getSkills/:game", skillDataController.getSkillList);

//Get all Fusion Chart Method
router.get("/getFusionChart/:game", fusionController.getFusionChart);

//Get all Elemental Chart Method
router.get("/getElemChart/:game", fusionController.getElementChart);

//Get all Special Fusions Method
router.get("/getSpecialFusions/:game", fusionController.getSpecialFusions);

//Get all Fusion Prerequisites Method
router.get("/getFusionPrereqs/:game", fusionController.getFusionPrereqs);

//Post Method
router.post("/post", async (req: any, res: any) => {
  console.log(req.body.skills);
  const data = new Demon({
    name: req.body.name,
    lvl: req.body.lvl,
    skills: req.body.skills,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req: any, res: any) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Demon.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/delete/:id", async (req: any, res: any) => {
  try {
    const id = req.params.id;
    const data = await Demon.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});
