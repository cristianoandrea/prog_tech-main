const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
        },
    button: { 
        type: String,
        required: true
        },
    img_path: {
        type: String,
    }
})

cardSchema.statics.pItem = async function(id, title,description,button,img_path){
    const item = await this.create({id, title,description,button,img_path })

    return item
}

//Get items from db
cardSchema.statics.gItem = async function(){
    const items = await this.find()

    return items
}


const Card =  mongoose.model('Card', cardSchema)
module.exports = {Card}