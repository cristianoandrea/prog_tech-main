const mongoose = require('mongoose')
const { count } = require('./userModel')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    rating : Number,
    tag: String,
    producer: String,
    prezzo: { 
        type: Number,
        required: true
    },
    disponibilità :Number, 
    recensioni : [{
        id : Number,
        nome : String,
        rating : Number, 
        txt: String
    }],
    descrizione: {
        type: String,
        required: true
        }, 
    animale: {
        type: String,
        required: true
        },
    image: {
        path : String,
        alt: String
    }
})
    

itemSchema.statics.pItem = async function(id, nome,rating,producer,tag,prezzo,varianti,recensioni,descrizione,animale,image){
    const item = await this.create({id, nome,rating,producer,tag,prezzo,varianti,recensioni,descrizione,animale,image })

    return item
}

//Get items from db
itemSchema.statics.gItem = async function(){
    const items = await this.find()

    return items
}


const Item =  mongoose.model('Item', itemSchema)
module.exports = {Item}