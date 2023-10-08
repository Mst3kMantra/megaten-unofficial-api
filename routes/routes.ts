const routesExpress = require('express');

const router = routesExpress.Router()

module.exports = router;

//Post Method
router.post('/post', (req: any, res: any) => {
    res.send('Post API')
})

//Get all Method
router.get('/getAll', (req: any, res: any) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req: any, res: any) => {
    res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', (req: any, res: any) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req: any, res: any) => {
    res.send('Delete by ID API')
})