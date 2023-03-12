
require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const itemRoutes = require('./routes/item')
const serviceRoutes = require('./routes/service')
const noteRoutes = require('./routes/note')
const cityRoutes = require('./routes/city')
const giocatoreRoutes = require('./routes/giocatore')



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
app.use('/api/city',cityRoutes)
app.use('/api/giocatore',giocatoreRoutes)





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


