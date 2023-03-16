const {Item} = require('../models/itemModel')


//POST di un item
const postItem = async (req,res) => {
    const {id, nome,rating,tag,prezzo,varianti,recensioni,descrizione,animale,image} = req.body
    try {
        const item = await Item.pItem(id, nome,producer,rating,tag,prezzo,varianti,recensioni,descrizione,animale,image)
        res.status(200).json({id, nome,producer,rating,tag,prezzo,varianti,recensioni,descrizione,animale,image})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


//GET item
const getItem =async (req,res) => {
    try {
        const item = await Item.obtain()
        res.status(200).json({item})
      } catch (error) {
        res.status(400).json({error: error.message})
      }
}