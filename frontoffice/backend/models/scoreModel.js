const mongoose = require('mongoose')
const { count } = require('./userModel')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
})
    

scoreSchema.statics.pItem = async function(username, points){
    const item = await this.create({username, points })

    return item
}

//Get items from db
scoreSchema.statics.gItem = async function(){
    const items = await this.find()

    return items
}


const Score =  mongoose.model('Score', scoreSchema)
module.exports = {Score}