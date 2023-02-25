const {Item} = require('../models/itemModel')


//POST di un item
const postItem = async (req,res) => {
    const {id,nome,prezzo,descrizione,tag,animale} = req.body
    try {
        const item = await Item.pItem(id,nome,prezzo,descrizione,image,tag,animale)
        res.status(200).json({id,nome,prezzo,descrizione,image,tag,animale})
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