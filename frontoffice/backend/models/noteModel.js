const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    identificatore:String,
    username:String, 
    species: String, 
    nameAnimal: String, 
    age: Number, 
    descrizione: String,
    sex: String,
    medicalConditions: String

})



const Note =  mongoose.model('Note', noteSchema)
module.exports = {Note}