const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    prezzo: {
        type: Number,
        required: true
    },
    descrizione: {
        type: String,
        required: true
        },
    animale: {
        type: String,
        required: true
        },
    image: {
        type: String,
    },
    count: {
        type: Number,
        required: true
    }
})

itemSchema.statics.pItem = async function(id, nome,prezzo,descrizione,image,tag,animale){
    const item = await this.create({id, nome,prezzo,descrizione,image,tag,animale })

    return item
}

//Get items from db
itemSchema.statics.gItem = async function(){
    const items = await this.find()

    return items
}


const Item =  mongoose.model('Item', itemSchema)
module.exports = {Item}