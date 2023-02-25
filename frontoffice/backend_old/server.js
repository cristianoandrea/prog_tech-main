
require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const itemRoutes = require('./routes/item')
const serviceRoutes = require('./routes/service')
const noteRoutes = require('./routes/note')


const cors = require('cors')

app.use(cors())

app.get('/', (req,res)=>{
    res.json({mssg: 'welcome' })
})

app.use(express.json())
//routes
app.use('/api/user',userRoutes)
app.use('/api/item',itemRoutes)
app.use('/api/service',serviceRoutes)
app.use('/api/note',noteRoutes)




//connect to db
mongoose.connect(process.env.MONGO_UI)
    .then(()=> {
        //listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db,listening on port',process.env.PORT)
        })
    })
    .catch((error)=> {
        console.log(error)
    })


/*
version: '3.8'

services:
  backoffice:
    build: ./backoffice
    ports:
      - "4020:4020"
  frontoffice-frontend:
    build: ./frontoffice/frontend
    ports:
      - "3000:3000"
  frontoffice-backend:
    build: ./frontoffice/backend
    command: npm run dev
    ports:
      - "4000:4000"
    volumes:
      - ./:/app/
    depends_on:
      - mongo
  mongo:
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - ./data:/data/db
  
  game:
    build: ./game
    ports:
      - "4200:80"

*/