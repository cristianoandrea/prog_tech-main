
require('dotenv').config()
const path = require("path");
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

//SERVING REACT FRONTEND
app.use(express.static(path.join(__dirname,"./../frontend/build")));
app.get('/frontoffice/*', (req, res) => {
    res.sendFile(path.join(__dirname, "./../frontend/build/index.html"));
  });


//SERVING ANGULAR FRONTEND  
app.use(express.static(path.join(__dirname, "./../../game/dist/game")));

app.all('/game/*', (req, res) => {
  res.sendFile(path.join(__dirname, "./../../game/dist/game/index.html"));
});

app.get("/backoffice/",(req,res) => {
    res.sendFile(path.resolve( "./../../backoffice/service.html"));
});
app.get("/backoffice/items",(req,res) => {
    res.sendFile(path.resolve( "./../../backoffice/items.html"));
});

app.get("/backoffice/notes",(req,res) => {
    res.sendFile(path.resolve( "./../../backoffice/notes.html"));
});

app.get("/backoffice/services",(req,res) => {
    res.sendFile(path.resolve( "./../../backoffice/service.html"));
});

app.get("/backoffice/citta",(req,res) => {
    res.sendFile(path.resolve( "./../../backoffice/serviceDetails.html"));
});

app.get("/backoffice/style.css",(req,res) => {
    res.sendFile(path.resolve( "./../../backoffice/style.css"));
});

app.get("/backoffice/nav.html",(req,res) => {
    res.sendFile(path.resolve( "./../../backoffice/nav.html"));
});



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


