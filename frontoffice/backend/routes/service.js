const express= require('express')
const router= express.Router()
const {} = require('../models/serviceModel')

//GET all service
router.post('/', (req,res) => {
    //momentaneo faro una funz nel controller
    Service.find().exec().then((data, error)=>{
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({message:'Get service succesfully',data})
    })
})

//GET one service
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET one service'})
})

//POST service
router.post('/create', (req,res) => {
    const service = new Service(req.body)
    service.save((error,data)=> {
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({message:'service has been addes succesfully',data})
    })
})

//DELETE service
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE item'})
})

//UPDATE service
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE item'})
})

module.exports = router