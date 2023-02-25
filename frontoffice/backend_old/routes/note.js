const express= require('express')
const router= express.Router()
const {Note} = require('../models/noteModel')
const {requireAuth} = require('../middlewares/authMiddleware')
const {postNote} = require('../controllers/noteController')

//Protect all routes
router.use(requireAuth)


//GET all note
router.post('/', (req,res) => {
    //momentaneo faro una funz nel controller
    Note.find().exec().then((data, error)=>{
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({message:'Get note succesfully',data})
    })
})  
 
//GET one Note
router.get('/:id', (req,res) => { 
    res.json({mssg: 'GET one Note'})
}) 

//POST Note
router.post('/create', async (req,res)=>{
    const {descrizione,image,tipo} = req.body
    //console.log(req.user._id)
    try {
        const user_id= req.user._id
        const note = await Note.create({user_id,descrizione,image,tipo})
        res.status(200).json({note})
    } catch(error){  
        res.status(400).json({error: error.message})
    }
})


//DELETE Note
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE Note'})
})

//UPDATE Note
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE Note'})
})

module.exports = router