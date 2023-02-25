const express= require('express')
const router= express.Router()
const {Card} = require('../models/cardModel')

//GET all items
router.post('/', (req,res) => {
    //momentaneo faro una funz nel controller
    Card.find().exec().then((data, error)=>{
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({message:'Get items succesfully',data})
    })
})

//GET one card
router.get('/:id', async (req,res) => {
    const {id} = req.params
    const card = await Card.findById(id)

    if (!card){
        return res.status(404).json ({error: 'no such card'})
    }

    res.status(200).json(card)
    
})

//POST Card
router.post('/create', async(req,res) => {
    const {title,description,button,img_path} = req.body
    try {
        const card = await Card.create({title,description,button,img_path})
        res.status(200).json({card})
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

//DELETE card
router.delete('/:id', async(req,res) => {
    const {id} = req.params
    const card = await Card.findByIdAndDelete(id)

    if (!card){ 
        return res.status(404).json ({error: 'no such card'})
    }

    res.status(200).json(card)
})

//UPDATE card
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE card'})
})

router.patch('/delete/:id', async(req,res) => {
    const {id} = req.params
    const card = await Card.findById(id)
    
    if (card){
    
        card.count = card.count -1 
        const updatedCard = await card.save()
        res.status(200)
       
    }
    else {
        res.status(404);
        throw new Error("User not found!")
      }
})

router.patch('/add/:id', async(req,res) => {
    const {id} = req.params
    const card = await Card.findById(id)
    
    if (card){

    //controllare sia valido decrementare cosi
        card.count = card.count + 1 

        const updatedCard = await card.save()

        res.status(200).json({
            count: updatedCard.count
        })
       
    }
    else {
        res.status(404);
        throw new Error("User not found!")
      }
})

module.exports = router