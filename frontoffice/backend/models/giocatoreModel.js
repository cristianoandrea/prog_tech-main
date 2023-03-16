const mongoose = require('mongoose')
const Schema = mongoose.Schema

const giocatoreSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
   
   punteggio: {
        type: Number,
        required: true,
    },
    identificatore: String
})

const Giocatore =  mongoose.model('Giocatore', giocatoreSchema)
module.exports = {Giocatore}