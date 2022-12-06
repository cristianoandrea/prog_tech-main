const express= require('express')
const router= express.Router()
const {Item} = require('../models/itemModel')

//GET all items
router.post('/', (req,res) => {
    //momentaneo faro una funz nel controller
    Item.find().exec().then((data, error)=>{
        if(error) return res.status(400).json({error: error.message})
        return res.status(200).json({message:'Get items succesfully',data})
    })
})

//GET one item
router.get('/:id', async (req,res) => {
    const {id} = req.params
    const item = await Item.findById(id)

    if (!item){
        return res.status(404).json ({error: 'no such item'})
    }

    res.status(200).json(item)
    
})

//POST item
router.post('/create', async(req,res) => {
    const {nome,prezzo,descrizione,animale,image,count} = req.body
    try {
        const item = await Item.create({nome,prezzo,descrizione,image,animale,count})
        res.status(200).json({item})
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

//DELETE item
router.delete('/:id', async(req,res) => {
    const {id} = req.params
    const item = await Item.findByIdAndDelete(id)

    if (!item){ 
        return res.status(404).json ({error: 'no such item'})
    }

    res.status(200).json(item)
})

//UPDATE item
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE item'})
})

router.patch('/delete/:id', async(req,res) => {
    const {id} = req.params
    const item = await Item.findById(id)
    
    if (item){
    
        item.count = item.count -1 
        const updatedItem = await item.save()
        res.status(200)
       
    }
    else {
        res.status(404);
        throw new Error("User not found!")
      }
})

router.patch('/add/:id', async(req,res) => {
    const {id} = req.params
    const item = await Item.findById(id)
    
    if (item){

    //controllare sia valido decrementare cosi
        item.count = item.count + 1 

        const updatedItem = await item.save()

        res.status(200).json({
            count: updatedItem.count
        })
       
    }
    else {
        res.status(404);
        throw new Error("User not found!")
      }
})

module.exports = router