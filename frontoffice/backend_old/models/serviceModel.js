const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const serviceSchema = new Schema({
    type : {
        type: String,
        required: true
    },
    descrizione : {
        type: String,
        required : true
    },
    sede : {
        type: String,
        required : true
    },
    disponibilità : {
        type: Boolean,
        required : true
    },
    num_cani : {
        type: Number,
        required : true
    }
})

serviceSchema.static.gService = async function() {
    const service = await this.find()
    return service
}

serviceSchema.statics.pService = async function( type,sede,disponibilità,num_cani){
    const item = await this.create({type,sede,disponibilità,num_cani})

    return item
}

module.exports = mongoose.model('Service', serviceSchema)