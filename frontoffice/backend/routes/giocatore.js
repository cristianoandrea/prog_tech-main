const express= require('express')
const router= express.Router()
const {Giocatore} = require('../models/giocatoreModel')

router.post('/', (req,res) => {
    //momentaneo faro una funz nel controller
    Giocatore.find().exec().then((data, error)=>{
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({message:'Get Giocatore succesfully',data})
    })
})  

router.post('/create', (req,res) => {
    console.log(req.body);
  const giocatore = new Giocatore(req.body);
  giocatore.save((error, data) => {
    if (error) return res.status(400).json({ error: error.message });
    return res
      .status(200)
      .json({ message: "item has been addes succesfully", data });
  });
})  

router.post('/filter', (req,res) => {
  console.log(req.body);
  const id = req.body._id
  const giocatore = Giocatore.find({identificatore: id})
  if(error) return res.status(400).json({error: error.message})
  return res.status(200).json({message:'Get Giocatore succesfully',giocatore})
});





module.exports = router