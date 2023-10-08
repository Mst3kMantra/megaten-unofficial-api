import {express as ex} from "../index";
const Model = require('../models/model');

const router = ex.Router()

module.exports = router;

//Post Method
router.post('/post', async (req: any, res: any) => {
    console.log(req.body.name)
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error: any) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req: any, res: any) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error: any){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req: any, res: any) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error: any){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
})