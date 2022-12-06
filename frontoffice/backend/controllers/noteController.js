const Note = require('../models/noteModel')


//POST di un Note
const postNote = async (req,res) => {
    const {descrizione,image,tipo} = req.body
    console.log(req.user._id)
    try {
        const user_id= req.user._id
        const note = await Note.create({user_id,descrizione,image,tipo})
        res.status(200).json({note})
    } catch(error){  
        res.status(400).json({error: "ops"})
    }
}
 

//GET Note
const getNote =async (req,res) => {
    try {
        const note = await Note.obtain()
        res.status(200).json({note})
      } catch (error) {
        res.status(400).json({error: error.message})
      }
}

module.exports= {postNote,getNote} 