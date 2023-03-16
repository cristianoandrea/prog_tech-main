const express= require('express')
const router= express.Router()
const {City} = require('../models/serviceModel')

//GET all city
router.post('/', (req,res) => {
    //momentaneo faro una funz nel controller
    City.find().exec().then((data, error)=>{
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({message:'Get city succesfully',data})
    })
})

//GET one city
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET one city'})
})

//POST city
router.post('/create', async(req,res) => {
    const city = new City(req.body)
   
    city.save((error,data)=> {
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({message:'city has been added succesfully',data})
    })
   
})

//DELETE city
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE city'})
})

//UPDATE city
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE city'})
})

module.exports = router