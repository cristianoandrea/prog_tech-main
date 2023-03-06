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
    }
   /* user_id:{ 
        type: String,
        required: true
    }*/
})

const communityNoteSchema= new Schema ({
    username: {
        type: String,
        required: true
    },
    nome_animale: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        required: true
    },
    sesso_animale: {
        type: String,
        required: true
    },
    eta: {
        type: Number,
        required: true
    },
    condizioni_mediche: {
        type:String,
        required:true
    }
})


//Post note to db
communityNoteSchema.statics.pNote = async function(us,tipo,descrizione,image){
    const note = await this.create({user: us,tipo,descrizione,image })

    return note
}

//Get items from db
communityNoteSchema.statics.gNote = async function(){
    const note = await this.find()

    return note
}


const Note =  mongoose.model('Note', communityNoteSchema)
module.exports = {Note}