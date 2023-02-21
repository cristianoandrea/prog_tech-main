const express = require("express")
const path = require("path")

const app = express();


app.get("/",(req,res) => {
    res.sendFile(path.resolve( "index.html"));
});
app.get("/items",(req,res) => {
    res.sendFile(path.resolve( "items.html"));
});

app.listen(process.env.PORT || 4020, ()=> console.log("Server running..."))

