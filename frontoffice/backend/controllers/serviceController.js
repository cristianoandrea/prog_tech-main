const {Service} = require('../models/serviceModel')


// POST service
const postService = async (req,res) => {
    const {id,nome,prezzo,descrizione,tag,animale} = req.body
    try {
        const service = await Service.pService(type,sede,disponibilità,num_cani)
        res.status(200).json({type,sede,disponibilità,num_cani})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}
 

// GET service
const getItem =async (req,res) => {
    try {
        const service = await Service.obtain()
        res.status(200).json({service})
      } catch (error) {
        res.status(400).json({error: error.message})
      }
}