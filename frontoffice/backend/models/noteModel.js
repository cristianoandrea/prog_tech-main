const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
   
    descrizione: {
        type: String,
        required: true,
        unique: false
    },
    image: {
        type: String,
    },
    user_id:{
        type: String,
        required: true
    }
})


//Post note to db
noteSchema.statics.pNote = async function(us,tipo,descrizione,image){
    const note = await this.create({user: us,tipo,descrizione,image })

    return note
}

//Get items from db
noteSchema.statics.gNote = async function(){
    const note = await this.find()

    return note
}


const Note =  mongoose.model('Note', noteSchema)
module.exports = {Note}