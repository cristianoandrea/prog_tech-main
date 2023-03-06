const express= require('express')
const router= express.Router()
const {Score} = require('../models/serviceModel')

//GET all city
router.post('/', (req,res) => {
    //momentaneo faro una funz nel controller
    Score.find().exec().then((data, error)=>{
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({message:'Get score succesfully',data})
    })
})

//GET one city 
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET one score'})
})

//POST city
router.post('/create', async(req,res) => {
    const score = new Score(req.body)
   
    score.save((error,data)=> {
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({message:'score has been added succesfully',data})
    })
   
})

//DELETE city
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE score'})
})

//UPDATE city
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE score'})
})

module.exports = router