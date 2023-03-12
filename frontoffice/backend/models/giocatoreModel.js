const mongoose = require('mongoose')
const Schema = mongoose.Schema

const giocatoreSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    identificatore: String,
   
   punteggio: {
        type: Number,
        required: true,
    }
})

const Giocatore =  mongoose.model('Giocatore', giocatoreSchema)
module.exports = {Giocatore}