const mongoose = require('mongoose')

const Schema = mongoose.Schema

const serviceSchema = new Schema({
    tipo: String,
    luogo : String,
    nome_struttura :{
        nome: String,
        img : String,
    },
    dottore : [{
        nome : String, 
        prezzo : Number,
        slot : {
          n_grandi : Number, 
          n_medi : Number,
          n_piccoli : Number 
      }, 
        impegni : [{
            dateiniz: Date,
            datefin: Date,
            n_grandi : Number,
            n_medi : Number, 
            n_piccoli : Number
        }]
    }]
   
})

const citySchema = new Schema({
    name : {
      type: String,
      required: true
    },
    img : {
      type: String,
      required: true
    }
  })
  
  
const City = mongoose.model('City', citySchema)

const Service = mongoose.model('Service', serviceSchema)
module.exports= {Service,City}