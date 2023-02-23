const express = require("express")
const path = require("path")

const app = express();


app.get("/",(req,res) => {
    res.sendFile(path.resolve( "service.html"));
});
app.get("/items",(req,res) => {
    res.sendFile(path.resolve( "items.html"));
});

app.get("/notes",(req,res) => {
    res.sendFile(path.resolve( "notes.html"));
});

app.get("/services",(req,res) => {
    res.sendFile(path.resolve( "service.html"));
});

app.get("/citta",(req,res) => {
    res.sendFile(path.resolve( "serviceDetails.html"));
});

app.get("/style.css",(req,res) => {
    res.sendFile(path.resolve( "style.css"));
});

app.get("/nav.html",(req,res) => {
    res.sendFile(path.resolve( "nav.html"));
});


app.listen(process.env.PORT || 4020, ()=> console.log("Server running..."))



