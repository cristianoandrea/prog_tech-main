const express = require("express")
const path = require("path")

const app = express();


app.get("/backoffice/",(req,res) => {
    res.sendFile(path.resolve( "service.html"));
});
app.get("/backoffice/items",(req,res) => {
    res.sendFile(path.resolve( "items.html"));
});

app.get("/backoffice/notes",(req,res) => {
    res.sendFile(path.resolve( "notes.html"));
});

app.get("/backoffice/services",(req,res) => {
    res.sendFile(path.resolve( "service.html"));
});

app.get("/backoffice/citta",(req,res) => {
    res.sendFile(path.resolve( "serviceDetails.html"));
});

app.get("/backoffice/style.css",(req,res) => {
    res.sendFile(path.resolve( "style.css"));
});

app.get("/backoffice/nav.html",(req,res) => {
    res.sendFile(path.resolve( "nav.html"));
});


app.listen(process.env.PORT || 4020, ()=> console.log("Server running..."))



