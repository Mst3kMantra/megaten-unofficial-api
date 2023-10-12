import {express as ex} from "../../index";
const Demon = require('../models/Demon');
const router = ex.Router();

module.exports = router;

//Post Method
router.post('/post', async (req: any, res: any) => {
    console.log(req.body.skills);
    const data = new Demon({
        name: req.body.name,
        lvl: req.body.lvl,
        skills: req.body.skills
    });
    
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch (error: any) {
        res.status(400).json({message: error.message});
    }
})

//Get all Method
router.get('/getAll', async (req: any, res: any) => {
    try{
        const data = await Demon.find();
        res.json(data);
    }
    catch(error: any){
        res.status(500).json({message: error.message});
    }
})

//Get by Name Method
router.get('/getOne/:name', async (req: any, res: any) => {
    try{
        const data = await Demon.find({name: req.params.name});
        res.json(data);
        console.log(data);
    }
    catch(error: any){
        res.status(500).json({message: error.message});
    }
})

//Get by Id Method
router.get('/getOnebyID/:id', async (req: any, res: any) => {
    try{
        const data = await Demon.findById(req.params.id);
        res.json(data);
        console.log(data);
    }
    catch(error: any){
        res.status(500).json({message: error.message});
    }
})

//Update by ID Method
router.patch('/update/:id', async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Demon.findByIdAndUpdate(
            id, updatedData, options
        );

        res.send(result);
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const data = await Demon.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`);
    }
    catch (error: any) {
        res.status(400).json({ message: error.message });
    }
})